import type {
  MouseEvent,
  ReactNode,
  RefObject,
} from "react";

import { modalContainer, modalDialog } from "@shared/ui/modal/ui/Modal.css";
import { ModalTrigger } from "@shared/ui/modal/ui/ModalTrigger";

type ModalViewProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  triggerText: string;
  triggerIcon?: ReactNode;
  triggerAriaLabel?: string;
  triggerClassName?: string;
  triggerFullWidth: boolean;
  content: ReactNode;
  onOpen: () => void;
  onClose: () => void;
  onBackdropClick: (event: MouseEvent<HTMLDialogElement>) => void;
};

export const ModalView = ({
  dialogRef,
  triggerText,
  triggerIcon,
  triggerAriaLabel,
  triggerClassName,
  triggerFullWidth,
  content,
  onOpen,
  onClose,
  onBackdropClick,
}: ModalViewProps) => {
  return (
    <>
      <ModalTrigger
        text={triggerText}
        icon={triggerIcon}
        ariaLabel={triggerAriaLabel}
        className={triggerClassName}
        fullWidth={triggerFullWidth}
        onOpen={onOpen}
      />

      <dialog
        ref={dialogRef}
        className={modalDialog}
        onClose={onClose}
        onClick={onBackdropClick}
      >
        <div className={modalContainer}>{content}</div>
      </dialog>
    </>
  );
};
