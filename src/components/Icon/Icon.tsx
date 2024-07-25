import {
  IconColor,
  IconColors,
  IconName,
  IconNames,
  IconSize,
  IconSizes,
} from "./IconTypes";

interface IconProps {
  name: IconName;
  size: IconSize;
  color: IconColor;
  onHover?: (e: unknown) => void;
}

export const Icon = ({ name, size, color, onHover }: IconProps) => {
  console.log(name + " " + size + color + onHover);
  const svgString = IconNames[name];
  const svgWithStyles = svgString
    .replace(/{{width}}/, IconSizes[size])
    .replace(/{{height}}/, IconSizes[size])
    .replace(/{{color}}/, IconColors[color]);

  return (
    <div
      style={{
        display: "inline-block",
        lineHeight: 0,
        verticalAlign: "text-top",
      }}
      onMouseOver={onHover}
      dangerouslySetInnerHTML={{ __html: svgWithStyles }}
    />
  );
};
