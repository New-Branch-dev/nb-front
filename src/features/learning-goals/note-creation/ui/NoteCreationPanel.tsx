"use client";

import { useId } from "react";

import { Icon, Input } from "@shared/ui";

import {
  NOTE_FILE_ACCEPT,
  useNoteCreationForm,
} from "../model/useNoteCreationForm";
import {
  cardHeaderStack,
  cardHeading,
  cardLead,
  dropzoneBody,
  dropzoneFormats,
  dropzoneHint,
  fieldsStack,
  tabPanel,
  uploadButton,
} from "./NoteCreationPanel.css";
import { NoteFileManager } from "./NoteFileManager";
import { fileManagerCard, fileManagerHeader } from "./noteUploadShell.css";

export const NoteCreationPanel = () => {
  const fileInputId = useId();
  const {
    directText,
    fileInputRef,
    handleDeleteAll,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileChange,
    handleRemoveFile,
    hasUploadedFiles,
    isDragging,
    openFilePicker,
    setDirectText,
    uploadedFiles,
  } = useNoteCreationForm();

  return (
    <div className={tabPanel} role="tabpanel">
      <div className={cardHeaderStack}>
        <h2 className={cardHeading}>자료 생성하기</h2>
        <p className={cardLead}>
          파일을 업로드하거나 텍스트를 직접 입력해주세요
        </p>
      </div>

      <div className={fieldsStack}>
        <Input
          name="learning-goals-direct-text"
          placeholder="텍스트를 직접 입력해주세요"
          aria-label="노트에 사용할 텍스트"
          value={directText}
          onChange={(event) => setDirectText(event.target.value)}
        />

        <input
          ref={fileInputRef}
          id={fileInputId}
          type="file"
          accept={NOTE_FILE_ACCEPT}
          multiple
          hidden
          onChange={handleFileChange}
        />

        {hasUploadedFiles ? (
          <NoteFileManager
            files={uploadedFiles}
            onDeleteAll={handleDeleteAll}
            onRemoveFile={handleRemoveFile}
            onAddMore={openFilePicker}
          />
        ) : (
          <div className={fileManagerCard}>
            <div className={fileManagerHeader} aria-hidden />

            <div
              className={dropzoneBody}
              data-dragging={isDragging}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <button
                type="button"
                className={uploadButton}
                onClick={openFilePicker}
              >
                <Icon
                  src="/up-load-pupple.svg"
                  size="sm"
                  aria-hidden
                />
                업로드
              </button>
              <p className={dropzoneHint}>
                파일을 업로드하거나 마우스로 끌어오세요
              </p>
              <p className={dropzoneFormats}>PPT, Word, PDF, 오디오 등</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
