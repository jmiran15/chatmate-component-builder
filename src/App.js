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
import { Analytics } from "@vercel/analytics/react";
import { Outlet, useNavigate } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GraphProvider } from "./contextv2/graph.tsx";
import { ProjectProvider } from "./contextv2/project.tsx";
const Shell = Loadable(lazy(() => import("./layouts/Shell.tsx")));

const Landing = Loadable(lazy(() => import("./pagesv2/Landing.tsx")));
const Projects = Loadable(
  lazy(() => import("./pagesv2/projects/Projects.tsx"))
);
const Project = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/Project.tsx"))
);
const ChatLayout = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/chat/layout.tsx"))
);
const Chat = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/chat/[chatid]/page.tsx"))
);
const Components = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/components/Components.tsx"))
);
const Component = Loadable(
  lazy(() =>
    import("./pagesv2/projects/[projectId]/components/[componentid]/page.tsx")
  )
);
const Settings = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/settings/page.tsx"))
);

const Publish = Loadable(
  lazy(() => import("./pagesv2/projects/[projectId]/Publish.tsx"))
);

const Chatbot = Loadable(lazy(() => import("./pagesv2/Chatbot.tsx")));

const Discover = Loadable(lazy(() => import("./pagesv2/Discover.tsx")));

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

// const router = createBrowserRouter([
//   {
//     element: <ClerkProviderWithNavigate />,
//     children: [
//       {
//         path: "/",
//         element: <Shell />,
//         children: [
//           {
//             index: true,
//             element: <div>Landing</div>,
//           },
//           {
//             path: "examples",
//             element: <div>Examples</div>,
//             children: [
//               {
//                 path: ":exampleId",
//                 element: <div>Example</div>,
//               },
//             ],
//           },
//           {
//             path: "discover",
//             element: <div>Discover</div>,
//           },
//           {
//             path: "sign-in/*",
//             element: (
//               <SignIn
//                 routing="path"
//                 path="/sign-in"
//                 signUpUrl="/sign-up"
//                 redirectUrl="/projects"
//               />
//             ),
//           },
//           {
//             path: "sign-up/*",
//             element: (
//               <SignUp
//                 routing="path"
//                 path="/sign-up"
//                 signInUrl="/sign-in"
//                 redirectUrl="/projects"
//               />
//             ),
//           },
//           {
//             element: (
//               <>
//                 <SignedIn>
//                   <Outlet />
//                 </SignedIn>
//                 <SignedOut>
//                   <RedirectToSignIn />
//                 </SignedOut>
//               </>
//             ),
//             children: [
//               {
//                 path: "/projects/:userId",
//                 element: <Projects />,
//                 loader: async ({ params }) => {
//                   return await supabaseClient
//                     .from("projects")
//                     .select("*")
//                     .eq("user", params.userId)
//                     .order("created_at", { ascending: false })
//                     .then(({ data, error }) => {
//                       if (error) {
//                         throw error;
//                       }
//                       if (data) {
//                         return data;
//                       }
//                     });
//                 },
//               },
//               {
//                 path: "projects/:userId/:projectId/:version?",
//                 element: <div>Project</div>,
//                 children: [
//                   {
//                     index: true,
//                     element: <div>Index</div>,
//                   },
//                   {
//                     path: "chats",
//                     element: <div>Chats</div>,
//                     children: [
//                       {
//                         path: ":chatId",
//                         element: <div>Chat</div>,
//                       },
//                     ],
//                   },
//                   {
//                     path: "components",
//                     element: <div>Components</div>,
//                     children: [
//                       {
//                         path: ":componentId",
//                         element: <div>Component</div>,
//                       },
//                     ],
//                   },
//                   {
//                     path: "analytics",
//                     element: <div>Analytics</div>,
//                   },
//                   {
//                     path: "versioning",
//                     element: <div>Versioning</div>,
//                   },
//                   {
//                     path: "publish",
//                     element: <div>Publish</div>,
//                   },
//                   {
//                     path: "settings",
//                     element: <div>Settings</div>,
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/b/*" element={<Chatbot />} />
        <Route path="/" element={<Shell />}>
          <Route index element={<Landing />} />
          <Route path="/examples" element={<div>Examples</div>} />
          <Route path="/discover" element={<Discover />} />
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
          ></Route>
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
          ></Route>
          <Route
            element={
              <>
                <SignedIn>
                  <Outlet />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          >
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId/:version?" element={<Project />}>
              <Route index element={<div>Index</div>} />
              <Route path="chat" element={<ChatLayout />}>
                <Route path=":chatid" element={<Chat />} />
              </Route>
              <Route path="components" element={<Components />} />
              <Route path="components/:componentId" element={<Component />} />
              <Route path="analytics" element={<div>Analytics</div>} />
              <Route path="versioning" element={<div>Versioning</div>} />
              <Route path="publish" element={<Publish />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
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
              <Analytics />
            </BrowserRouter>
          </GraphProvider>
        </ProjectProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
