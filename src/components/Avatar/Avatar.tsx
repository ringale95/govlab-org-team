import { CSSProperties } from "react";
import { AvatarSizes, AvatarType } from "./AvatarTypes";

interface AvatarProps {
  url: string;
  size: AvatarType;
  sx?: CSSProperties;
}

/**
 * Resuable Avatar component used to display team member profile image.
 */
export const Avatar = ({ url, size, sx }: AvatarProps) => {
  const avatarClassName = AvatarSizes[size];
  return <img className={avatarClassName} src={url} style={sx}></img>;
};
