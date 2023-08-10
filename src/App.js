import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Loadable from "./componentsv2/Loadable.tsx";
import { lazy, useState } from "react";
import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-icons/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-react-richtexteditor/styles/bootstrap5.css";
import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/bootstrap5.css";
import { useNavigate } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GraphProvider } from "./contextv2/graph.tsx";
import { ProjectProvider } from "./contextv2/project.tsx";
import Protected from "./pagesv2/protected.jsx";
const Shell = Loadable(lazy(() => import("./pagesv2/layout.tsx")));
const Landing = Loadable(lazy(() => import("./pagesv2/page.tsx")));
const Projects = Loadable(lazy(() => import("./pagesv2/projects/page.tsx")));
const Project = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/layout.tsx"))
);
const ChatLayout = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/chat/layout.tsx"))
);
const Chat = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/chat/[chatid]/page.tsx"))
);
const Components = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/components/page.tsx"))
);
const Component = Loadable(
  lazy(() =>
    import("./pagesv2/projects/[projectId]/components/[componentid]/page.tsx")
  )
);
const Settings = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/settings/page.tsx"))
);

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

if (!process.env.REACT_APP_SYNCFUSION_LICENSE_KEY) {
  throw new Error("Missing Syncfusion License Key");
}

if (!process.env.REACT_APP_SUPABASE_URL) {
  throw new Error("Missing Supabase URL");
}

if (!process.env.REACT_APP_SUPABASE_API_KEY) {
  throw new Error("Missing Supabase API Key");
}

if (!process.env.REACT_APP_OPENAI) {
  throw new Error("Missing OpenAI API Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Protected />}>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectid" element={<Project />}>
              <Route path="chat" element={<ChatLayout />}>
                <Route path=":chatid" element={<Chat />} />
              </Route>
              <Route path="components" element={<Components />} />
              <Route path="components/:componentid" element={<Component />} />
              <Route path="api" element={<div>api</div>} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route
            path="/sign-in/*"
            element={
              <SignIn
                routing="path"
                path="/sign-in"
                signUpUrl="/sign-up"
                redirectUrl="/projects"
              />
            }
          />
          <Route
            path="/sign-up/*"
            element={
              <SignUp
                routing="path"
                path="/sign-up"
                signInUrl="/sign-in"
                redirectUrl="/projects"
              />
            }
          />
        </Route>
      </Routes>
    </ClerkProvider>
  );
}

export default function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ProjectProvider>
          <GraphProvider>
            <BrowserRouter>
              <ClerkProviderWithRoutes />
            </BrowserRouter>
          </GraphProvider>
        </ProjectProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
