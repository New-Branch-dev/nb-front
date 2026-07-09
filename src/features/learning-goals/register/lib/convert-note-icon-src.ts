const NOTE_ICON_SRC = {
  book: "/learning-goals/book.svg",
  paper: "/learning-goals/paper.svg",
  text: "/learning-goals/text.svg",
} as const;

const PAPER_EXTENSION_SET = new Set(["doc", "docx", "word"]);
const TEXT_EXTENSION_SET = new Set(["text", "txt"]);

const convertFileNameToExtension = (fileName: string) => {
  const extension = fileName.trim().split(".").pop();

  return extension?.toLowerCase() ?? "";
};

export const convertNoteIconSrc = (noteName: string) => {
  const extension = convertFileNameToExtension(noteName);

  if (extension === "pdf") {
    return NOTE_ICON_SRC.book;
  }

  if (PAPER_EXTENSION_SET.has(extension)) {
    return NOTE_ICON_SRC.paper;
  }

  if (TEXT_EXTENSION_SET.has(extension)) {
    return NOTE_ICON_SRC.text;
  }

  return NOTE_ICON_SRC.text;
};
