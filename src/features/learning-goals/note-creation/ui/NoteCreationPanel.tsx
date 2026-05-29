"use client";

import Image from "next/image";
import { useId } from "react";

import { useReportStepValidity } from "@shared/hook/useReportStepValidity";
import { Input } from "@shared/ui";

import { NOTE_FILE_ACCEPT, useNoteCreationForm } from "../model/useNoteCreationForm";
import { NoteFileManager } from "./NoteFileManager";
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
import { fileManagerCard, fileManagerHeader } from "./noteUploadShell.css";

type NoteCreationPanelProps = {
  onValidityChange: (isValid: boolean) => void;
  isActive: boolean;
};

export const NoteCreationPanel = ({
  onValidityChange,
  isActive,
}: NoteCreationPanelProps) => {
  const fileInputId = useId();
  const form = useNoteCreationForm();

  useReportStepValidity(isActive, form.canCreateNote, onValidityChange);

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
          value={form.directText}
          onChange={(event) => form.setDirectText(event.target.value)}
        />

        <input
          ref={form.fileInputRef}
          id={fileInputId}
          type="file"
          accept={NOTE_FILE_ACCEPT}
          multiple
          hidden
          onChange={form.handleFileChange}
        />

        {form.hasUploadedFiles ? (
          <NoteFileManager
            files={form.uploadedFiles}
            onDeleteAll={form.handleDeleteAll}
            onRemoveFile={form.handleRemoveFile}
            onAddMore={form.openFilePicker}
          />
        ) : (
          <div className={fileManagerCard}>
            <div className={fileManagerHeader} aria-hidden />

            <div
              className={dropzoneBody}
              data-dragging={form.isDragging}
              onDragEnter={form.handleDragEnter}
              onDragOver={form.handleDragOver}
              onDragLeave={form.handleDragLeave}
              onDrop={form.handleDrop}
            >
              <button
                type="button"
                className={uploadButton}
                onClick={form.openFilePicker}
              >
                <Image
                  src="/up-load-pupple.svg"
                  alt=""
                  width={15}
                  height={15}
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
