import { ReactNode } from "react";

import { Button } from "@shared/ui/button/Button";

type ModalTriggerProps = {
  text: string;
  icon?: ReactNode;
  ariaLabel?: string;
  className?: string;
  fullWidth?: boolean;
  onOpen: () => void;
};

export const ModalTrigger = ({
  text,
  icon,
  ariaLabel,
  className,
  fullWidth = false,
  onOpen,
}: ModalTriggerProps) => {
  return (
    <Button
      type="button"
      className={className}
      aria-label={ariaLabel}
      fullWidth={fullWidth}
      onClick={onOpen}
    >
      {icon}
      <span>{text}</span>
    </Button>
  );
};
