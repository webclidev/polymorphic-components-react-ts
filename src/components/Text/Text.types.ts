import { PolymorphicComponentPropsWithRef } from "../../common.types";

type Rainbow =
  | "violet"
  | "indigo"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red";

export type TextProps = {
  color?: Rainbow | "black";
};

export type TextComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, TextProps>
) => React.ReactElement | null;
