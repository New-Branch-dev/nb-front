import { createUploadedFileId } from "./formatFileMeta";

export type UploadedFileEntry = {
  id: string;
  file: File;
};

export const toUploadedFileEntries = (files: File[]): UploadedFileEntry[] =>
  files.map((file) => ({
    id: createUploadedFileId(file),
    file,
  }));

export const mergeUploadedFiles = (
  current: UploadedFileEntry[],
  incoming: File[],
): UploadedFileEntry[] => {
  const existingIds = new Set(current.map((entry) => entry.id));
  const merged = [...current];

  for (const file of incoming) {
    const id = createUploadedFileId(file);

    if (existingIds.has(id)) {
      continue;
    }

    existingIds.add(id);
    merged.push({ id, file });
  }

  return merged;
};
