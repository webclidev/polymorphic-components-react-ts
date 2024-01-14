import { PolymorphicComponentProps } from "../../common.types";
import { TextProps } from "./Text.types";

export const Text = <C extends React.ElementType = "span">({
  as,
  color,
  style,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || "span";
  const internalStyles = { style: { ...style, color } };

  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
