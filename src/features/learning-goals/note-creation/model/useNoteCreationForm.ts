"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";

import { useLearningGoalsDraft } from "../../draft";
import { buildNoteItems } from "../../draft/lib/buildNoteItems";
import {
  mergeUploadedFiles,
  type UploadedFileEntry,
} from "../lib/uploadedFiles";

export const NOTE_FILE_ACCEPT =
  ".ppt,.pptx,.doc,.docx,.pdf,audio/*,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export const useNoteCreationForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [directText, setDirectText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileEntry[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { dispatch } = useLearningGoalsDraft();

  const hasUploadedFiles = uploadedFiles.length > 0;
  const canCreateNote =
    directText.trim().length > 0 || uploadedFiles.length > 0;

  useEffect(() => {
    dispatch({
      type: "SET_NOTES",
      notes: buildNoteItems(
        directText,
        uploadedFiles.map((entry) => entry.file),
      ),
    });
  }, [directText, dispatch, uploadedFiles]);

  const appendFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files);

    if (fileArray.length === 0) {
      return;
    }

    setUploadedFiles((prev) => mergeUploadedFiles(prev, fileArray));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      appendFiles(event.target.files);
    }

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files.length > 0) {
      appendFiles(event.dataTransfer.files);
    }
  };

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDeleteAll = () => {
    setUploadedFiles([]);
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((entry) => entry.id !== id));
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return {
    directText,
    setDirectText,
    uploadedFiles,
    hasUploadedFiles,
    isDragging,
    canCreateNote,
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDeleteAll,
    handleRemoveFile,
    openFilePicker,
  };
};
