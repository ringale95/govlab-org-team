import { IconColor, IconName, IconSize } from "./IconTypes";

interface IconProps {
  name: IconName;
  size: IconSize;
  color: IconColor;
  onHover: (e: unknown) => void;
}

export const Icon = ({ name, size, color, onHover }: IconProps) => {
  return <>{name + " " + size + color + onHover}</>;
};
