const ALLOWED_NOTE_FILE_EXTENSION_SET = new Set([
  "doc",
  "docx",
  "pdf",
  "text",
  "txt",
  "word",
]);
const TEXT_NOTE_FILE_EXTENSION_SET = new Set(["text", "txt"]);

export const NOTE_FILE_ACCEPT = ".pdf,.word,.doc,.docx,.text,.txt";

const convertFileNameToExtension = (fileName: string) => {
  const extension = fileName.trim().split(".").pop();

  return extension?.toLowerCase() ?? "";
};

export const checkIsAllowedNoteFile = (fileName: string) =>
  ALLOWED_NOTE_FILE_EXTENSION_SET.has(convertFileNameToExtension(fileName));

export const checkIsTextNoteFile = (fileName: string) =>
  TEXT_NOTE_FILE_EXTENSION_SET.has(convertFileNameToExtension(fileName));

export const filterAllowedNoteFileList = (fileList: FileList | File[]) =>
  Array.from(fileList).filter((file) => checkIsAllowedNoteFile(file.name));
