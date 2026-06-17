"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

import { ModalView } from "./ModalView";

export type ModalRenderChildren = (controls: { close: () => void }) => ReactNode;

export type ModalProps = {
  triggerText: string;
  triggerIcon?: ReactNode;
  triggerAriaLabel?: string;
  triggerClassName?: string;
  triggerFullWidth?: boolean;
  children: ReactNode | ModalRenderChildren;
};

export const Modal = ({
  triggerText,
  triggerIcon,
  triggerAriaLabel,
  triggerClassName,
  triggerFullWidth = false,
  children,
}: ModalProps) => {
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

  const viewProps = {
    dialogRef,
    triggerText,
    triggerIcon,
    triggerAriaLabel,
    triggerClassName,
    triggerFullWidth,
    content,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
    onBackdropClick: handleBackdropClick,
  };

  return <ModalView {...viewProps} />;
};
