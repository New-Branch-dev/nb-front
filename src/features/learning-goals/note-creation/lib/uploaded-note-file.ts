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

export const createUploadedNoteFileKey = ({
  name,
  size,
  lastModified,
}: Pick<UploadedNoteFile, "name" | "size" | "lastModified">): string =>
  `${name}-${size}-${lastModified}`;

export const convertFilesToUploadedNoteFileList = (
  fileList: FileList | File[],
): UploadedNoteFile[] => {
  const uploadIdSeed = Date.now();

  return Array.from(fileList).map((file, index) => ({
    id: `${createUploadedNoteFileKey(file)}-${uploadIdSeed}-${index}`,
    attachmentId: null,
    name: file.name,
    size: file.size,
    lastModified: file.lastModified,
    sizeLabel: convertFileSizeToLabel(file.size),
    file,
  }));
};
