import React from "react";
import { PolymorphicRef, Props } from "../../common.types";
import { TextComponent, TextProps } from "./Text.types";

export const Text = React.forwardRef(
  <C extends React.ElementType = "span">(
    { as, color, style, children, ...restProps }: Props<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";
    const internalStyles = { style: { ...style, color } };

    return (
      <Component {...restProps} {...internalStyles} ref={ref}>
        {children}
      </Component>
    );
  }
) as TextComponent;
