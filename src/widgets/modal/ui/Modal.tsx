"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

import { modalContainer, modalDialog } from "./Modal.css";
import { ModalTrigger } from "./ModalTrigger";

type ModalRenderChildren = (controls: { close: () => void }) => ReactNode;

type ModalProps = {
  triggerText: string;
  triggerIcon?: ReactNode;
  triggerAriaLabel?: string;
  triggerClassName?: string;
  children: ReactNode | ModalRenderChildren;
};

export function Modal({
  triggerText,
  triggerIcon,
  triggerAriaLabel,
  triggerClassName,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
      setIsOpen(false);
    }
  };

  const close = () => setIsOpen(false);
  const content =
    typeof children === "function"
      ? (children as ModalRenderChildren)({ close })
      : children;

  return (
    <>
      <ModalTrigger
        text={triggerText}
        icon={triggerIcon}
        ariaLabel={triggerAriaLabel}
        className={triggerClassName}
        onOpen={() => setIsOpen(true)}
      />

      <dialog
        ref={dialogRef}
        className={modalDialog}
        onClose={() => setIsOpen(false)}
        onClick={handleBackdropClick}
      >
        <div className={modalContainer}>{content}</div>
      </dialog>
    </>
  );
}
