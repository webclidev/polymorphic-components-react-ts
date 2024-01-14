import { Props } from "./Text.types";

export const Text = <C extends React.ElementType = "span">({
  as,
  color,
  style,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";
  const internalStyles = { style: { ...style, color } };

  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
