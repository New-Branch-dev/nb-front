"use client";

import { useState } from "react";

export const useSelectableChipWithDirectInput = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDirectInputActive, setIsDirectInputActive] = useState(false);
  const [directInputValue, setDirectInputValue] = useState("");

  const hasSelection =
    selectedItems.length > 0 ||
    (isDirectInputActive && directInputValue.trim().length > 0);

  return {
    selectedItems,
    setSelectedItems,
    isDirectInputActive,
    setIsDirectInputActive,
    directInputValue,
    setDirectInputValue,
    hasSelection,
  };
};
