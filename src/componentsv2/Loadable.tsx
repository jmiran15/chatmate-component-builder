import { LoadingOverlay } from "@mantine/core";
import { Suspense } from "react";

const Loadable = (Component: React.ComponentType<any>) => (props: any) =>
  (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
