"use client";

import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { useLearningGoalsStore } from "@features/learning-goals/model/use-learning-goals-store";
import { filterAllowedNoteFileList } from "@features/learning-goals/note-creation/lib/note-file-upload";
import { convertFilesToUploadedNoteFileList } from "@features/learning-goals/note-creation/lib/uploaded-note-file";
import { NoteCreationView } from "@features/learning-goals/note-creation/ui/note-creation-view";

export const NoteCreation = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    uploadedFileList,
    appendUploadedFiles,
    deleteAllUploadedFiles,
    deleteUploadedFile,
    directText,
    setNoteDirectText,
  } = useLearningGoalsStore(
    useShallow((state) => ({
      uploadedFileList: state.noteCreation.uploadedFileList,
      directText: state.noteCreation.directText,
      appendUploadedFiles: state.appendUploadedFiles,
      deleteAllUploadedFiles: state.deleteAllUploadedFiles,
      deleteUploadedFile: state.deleteUploadedFile,
      setNoteDirectText: state.setNoteDirectText,
    })),
  );
  const [isDragging, setIsDragging] = useState(false);

  const appendFiles = (fileList: FileList | File[]) => {
    const allowedFileList = filterAllowedNoteFileList(fileList);

    if (allowedFileList.length === 0) {
      return;
    }

    const nextFileList = convertFilesToUploadedNoteFileList(allowedFileList);

    appendUploadedFiles(nextFileList);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteAll = () => {
    deleteAllUploadedFiles();
  };

  const handleRemoveFile = (fileId: string) => {
    deleteUploadedFile(fileId);
  };

  const handleDirectTextChange = (value: string) => {
    setNoteDirectText(value);
  };

  const handleOpenFile = (fileId: string) => {
    const targetFile = uploadedFileList.find((file) => file.id === fileId);

    if (!targetFile?.file) {
      return;
    }

    const objectUrl = URL.createObjectURL(targetFile.file);
    window.open(objectUrl, "_blank", "noopener,noreferrer");
    URL.revokeObjectURL(objectUrl);
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      appendFiles(event.target.files);
    }

    event.target.value = "";
  };

  const handleDropzoneDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDropzoneDragLeave = () => {
    setIsDragging(false);
  };

  const handleDropzoneDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files.length > 0) {
      appendFiles(event.dataTransfer.files);
    }
  };

  return (
    <NoteCreationView
      fileInputRef={fileInputRef}
      uploadedFileList={uploadedFileList}
      directText={directText}
      isDragging={isDragging}
      onUploadClick={handleUploadClick}
      onDeleteAll={handleDeleteAll}
      onRemoveFile={handleRemoveFile}
      onOpenFile={handleOpenFile}
      onDirectTextChange={handleDirectTextChange}
      onFileInputChange={handleFileInputChange}
      onDropzoneDragOver={handleDropzoneDragOver}
      onDropzoneDragLeave={handleDropzoneDragLeave}
      onDropzoneDrop={handleDropzoneDrop}
    />
  );
};
