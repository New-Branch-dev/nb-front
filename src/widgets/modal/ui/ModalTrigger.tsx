import { ReactNode } from "react";

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
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={onOpen}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
