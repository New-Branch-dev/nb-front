export const toggleSelectableItems = (items: string[], targetItem: string) => {
  const nextItems = new Set(items);

  if (nextItems.has(targetItem)) {
    nextItems.delete(targetItem);
  } else {
    nextItems.add(targetItem);
  }

  return Array.from(nextItems);
};
