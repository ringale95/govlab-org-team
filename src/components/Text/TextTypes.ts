/**
 * Enum to map font variant to font weight.
 */
export enum TextVariants {
    regular = "normal",
    light = "300",
    bold = "600",
  }
  
  /**
   * Type used by Text component props to type-check variant prop.
   */
export type TextVariant = keyof typeof TextVariants;
  
  /**
   * Type used by Text component props to type-check as prop.
   */
export type TextType =
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "div";
  
  /**
   * Enum to map text colors.
   */
export enum TextColors {
    "text-primary" = `var(--gvl-text-primary)`,
    "text-secondary" = `var(--gvl-text-secondary)`,
    "text-tertiary" = `var(--gvl-text-tertiary)`,
  }
  
  /**
   * Type used by Text component props to type-check as colors.
   */
export type TextColor = keyof typeof TextColors;