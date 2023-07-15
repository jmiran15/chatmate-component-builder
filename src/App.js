import { MantineProvider } from "@mantine/core";
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
import Shell from "./layouts/shell";
import { registerLicense } from "@syncfusion/ej2-base";
import { GraphProvider } from "./context/Graph";

// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

export default function App() {
  return (
    <GraphProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Shell />
      </MantineProvider>
    </GraphProvider>
  );
}
