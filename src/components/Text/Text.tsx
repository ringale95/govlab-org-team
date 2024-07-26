import { PropsWithChildren } from "react";
import {
  TextVariant,
  TextType,
  TextColor,
  TextVariants,
  TextColors,
} from "./TextTypes";

/**
 * Defines shape of Text component props.
 */
interface TextProps {
  variant: TextVariant;
  as: TextType;
  color: TextColor;
  href?: string;
}

/**
 * Resuable Text component with variant & as props.
 * @see {@link TextType}
 * @see {@link TextVariant}.
 */
export const Text = ({
  variant,
  as,
  href,
  color,
  children,
}: PropsWithChildren<TextProps>) => {
  const Component = as;
  const fontWeight = TextVariants[variant];
  const textColor = color ? TextColors[color] : "var(--black-color)";
  return (
    <Component href={href} style={{ fontWeight, color: textColor }}>
      {children}
    </Component>
  );
};
