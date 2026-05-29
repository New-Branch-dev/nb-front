import type { LearningGoalsNoteItem } from "../model/learningGoalsDraft.types";

const stripExtension = (filename: string): string => {
  const lastDot = filename.lastIndexOf(".");

  if (lastDot <= 0) {
    return filename;
  }

  return filename.slice(0, lastDot);
};

const buildNoteFromText = (directText: string): LearningGoalsNoteItem | null => {
  const trimmed = directText.trim();

  if (!trimmed) {
    return null;
  }

  const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
  const title = lines[0] ?? trimmed;
  const subtitle = lines.length > 1 ? lines.slice(1).join(" ") : undefined;

  return {
    id: "note-direct-text",
    title,
    subtitle,
  };
};

const buildNoteFromFile = (file: File): LearningGoalsNoteItem => ({
  id: `note-file-${file.name}`,
  title: stripExtension(file.name),
  subtitle: file.name,
});

export const buildNoteItems = (
  directText: string,
  selectedFiles: File[],
): LearningGoalsNoteItem[] => {
  const items: LearningGoalsNoteItem[] = [];
  const textNote = buildNoteFromText(directText);

  if (textNote) {
    items.push(textNote);
  }

  for (const file of selectedFiles) {
    items.push(buildNoteFromFile(file));
  }

  return items;
};
