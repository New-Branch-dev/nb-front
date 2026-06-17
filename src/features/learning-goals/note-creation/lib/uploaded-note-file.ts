import type { UploadedNoteFile } from "@features/learning-goals/model/store.types";

const BYTE_UNITS = ["B", "KB", "MB", "GB"] as const;

export const convertFileSizeToLabel = (size: number): string => {
  if (size <= 0) {
    return "0 B";
  }

  const unitIndex = Math.min(
    Math.floor(Math.log(size) / Math.log(1024)),
    BYTE_UNITS.length - 1,
  );
  const convertedSize = size / 1024 ** unitIndex;
  const roundedSize =
    convertedSize >= 10 ? Math.round(convertedSize) : convertedSize.toFixed(1);

  return `${roundedSize} ${BYTE_UNITS[unitIndex]}`;
};

export const convertDateToAddedAtLabel = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const convertFilesToUploadedNoteFileList = (
  fileList: FileList | File[],
  addedAt: Date,
): UploadedNoteFile[] => {
  return Array.from(fileList).map((file, index) => ({
    id: `${file.name}-${file.size}-${file.lastModified}-${addedAt.getTime()}-${index}`,
    file,
    name: file.name,
    size: file.size,
    lastModified: file.lastModified,
    sizeLabel: convertFileSizeToLabel(file.size),
    addedAtLabel: convertDateToAddedAtLabel(addedAt),
  }));
};
