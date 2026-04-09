import { ReactNode } from "react";

import { Button } from "@shared/ui/Button.styles";

type ModalTriggerProps = {
  text: string;
  icon?: ReactNode;
  ariaLabel?: string;
  className?: string;
  onOpen: () => void;
};

export function ModalTrigger({
  text,
  icon,
  ariaLabel,
  className,
  onOpen,
}: ModalTriggerProps) {
  return (
    <Button className={className} aria-label={ariaLabel} onClick={onOpen}>
      {icon}
      <span>{text}</span>
    </Button>
  );
}
