import { PropsWithChildren, useState } from "react";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";

interface DropdownProps {
  handleClick?: (e: unknown) => void;
}

export const Dropdown = ({
  handleClick,
  children,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false);

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
