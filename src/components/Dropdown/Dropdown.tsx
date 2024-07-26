import { PropsWithChildren, useState } from "react";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";

/**
 * Defines the shape of the Dropdown component props.
 * @interface
 */
interface DropdownProps {
  /**
   * Optional callback function to handle click events.
   * @param {unknown} e - The event object.
   */
  handleClick?: (e: unknown) => void;
}

/**
 * Reusable Dropdown component that displays children and toggles visibility.
 * @param {PropsWithChildren<DropdownProps>} props - The props for the component.
 * @param {DropdownProps["handleClick"]} [props.handleClick] - Optional callback function for handling clicks.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the dropdown.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export const Dropdown = ({
  handleClick,
  children,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the dropdown open state and invokes handleClick callback if provided.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (handleClick) handleClick(!isOpen);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <Text variant="regular" as="span" color="text-tertiary">
        {children}
      </Text>
      <div className="dropdown-icon">
        <Icon
          name={isOpen ? "up-arrow" : "down-arrow"}
          size="sm"
          color="icon-primary"
        />
      </div>
    </div>
  );
};
