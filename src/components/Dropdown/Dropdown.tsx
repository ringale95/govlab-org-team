import { PropsWithChildren } from "react";
import { Text } from "../Text/Text";

interface DropdownProps {
  handleClick: (e: unknown) => void;
}

export const Dropdown = ({
  handleClick,
  children,
}: PropsWithChildren<DropdownProps>) => {
  return (
    <div onClick={handleClick}>
      <Text variant="regular" as="span" color="text-tertiary">
        {children}
      </Text>
    </div>
  );
};
