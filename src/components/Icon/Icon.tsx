import { CSSProperties, useState } from "react";
import {
  IconColor,
  IconColors,
  IconName,
  IconNames,
  IconSize,
  IconSizes,
} from "./IconTypes";

/**
 * Defines shape of Icon component props.
 */
interface IconProps {
  name: IconName;
  size: IconSize;
  color: IconColor;
  sx?: CSSProperties;
  hoverable?: boolean;
  onHover?: (e: unknown) => void;
}

/**
 * Resuable Icon component with name, size, color as props.
 * @see {@link IconColor}
 * @see {@link IconName}
 * @see {@link IconSize}
 */

export const Icon = ({ name, size, color, sx, hoverable }: IconProps) => {
  const [hover, setHover] = useState(false);
  const svgString = IconNames[name];
  const svgWithStyles = svgString
    .replace(/{{width}}/, IconSizes[size])
    .replace(/{{height}}/, IconSizes[size])
    .replace(/{{color}}/, hover && hoverable ? "#fff" : IconColors[color]);

  return (
    <div
      style={{
        display: "inline-block",
        lineHeight: 0,
        verticalAlign: "text-top",
        ...sx,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      dangerouslySetInnerHTML={{ __html: svgWithStyles }}
    />
  );
};
