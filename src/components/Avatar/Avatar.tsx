import { CSSProperties } from "react";
import { AvatarSizes, AvatarType } from "./AvatarTypes";

/**
 * Props for the Avatar component.
 * @interface
 */
interface AvatarProps {
  /**
   * URL of the avatar image.
   * @type {string}
   */
  url: string;

  /**
   * Size of the avatar.
   * @type {AvatarType}
   */
  size: AvatarType;

  /**
   * Optional inline styles for the avatar image.
   * @type {CSSProperties}
   */
  sx?: CSSProperties;
}

/**
 * Reusable Avatar component used to display a team member's profile image.
 * @param {AvatarProps} props - The props for the component.
 * @param {string} props.url - The URL of the avatar image.
 * @param {AvatarType} props.size - The size of the avatar.
 * @param {CSSProperties} [props.sx] - Optional inline styles for the avatar image.
 * @returns {JSX.Element} The rendered Avatar component.
 */
export const Avatar = ({ url, size, sx }: AvatarProps) => {
  const avatarClassName = AvatarSizes[size];
  return (
    <img
      className={avatarClassName}
      src={url ?? "src/assets/images/placeholder.png"}
      style={sx}
      alt="Avatar"
    />
  );
};
