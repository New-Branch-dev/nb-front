"use client";

import { useState } from "react";

export const useSelectableChipWithDirectInput = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDirectInputActive, setIsDirectInputActive] = useState(false);
  const [directInputValue, setDirectInputValue] = useState("");
  const [directInputTags, setDirectInputTags] = useState<string[]>([]);

  const hasSelection =
    selectedItems.length > 0 ||
    directInputTags.length > 0 ||
    (isDirectInputActive && directInputValue.trim().length > 0);

  return {
    selectedItems,
    setSelectedItems,
    isDirectInputActive,
    setIsDirectInputActive,
    directInputValue,
    setDirectInputValue,
    directInputTags,
    setDirectInputTags,
    hasSelection,
  };
};
