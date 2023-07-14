import { MantineProvider } from "@mantine/core";
import Shell from "./shell";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Shell />
    </MantineProvider>
  );
}
