import { ReactNode } from "react";

export const Text = ({ as, children }: { as?: any; children: ReactNode }) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};
