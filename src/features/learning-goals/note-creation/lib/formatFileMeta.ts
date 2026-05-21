export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes}B`;
  }

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)}KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
};

export const formatFileAddedDate = (file: File): string => {
  const date = new Date(file.lastModified);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const createUploadedFileId = (file: File): string =>
  `upload-${file.name}-${file.size}-${file.lastModified}`;
