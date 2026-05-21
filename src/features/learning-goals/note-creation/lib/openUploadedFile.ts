export const openUploadedFile = (file: File) => {
  const url = URL.createObjectURL(file);
  window.open(url, "_blank", "noopener,noreferrer");
  URL.revokeObjectURL(url);
};
