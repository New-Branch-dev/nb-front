"use client";

import Image from "next/image";

import { formatFileAddedDate, formatFileSize } from "../lib/formatFileMeta";
import { openUploadedFile } from "../lib/openUploadedFile";
import type { UploadedFileEntry } from "../lib/uploadedFiles";
import {
  addMoreButton,
  deleteAllButton,
  fileListHeadCell,
  fileListHeadCellActions,
  fileListHeadRow,
  fileListScroll,
  fileListTable,
  fileManagerCard,
  fileManagerFooter,
  fileManagerHeader,
  fileMetaCell,
  fileNameCell,
  fileRow,
  fileRowActions,
  openFileButton,
  removeFileButton,
} from "./noteUploadShell.css";

type NoteFileManagerProps = {
  files: UploadedFileEntry[];
  onDeleteAll: () => void;
  onRemoveFile: (id: string) => void;
  onAddMore: () => void;
};

export const NoteFileManager = ({
  files,
  onDeleteAll,
  onRemoveFile,
  onAddMore,
}: NoteFileManagerProps) => {
  return (
    <div className={fileManagerCard}>
      <div className={fileManagerHeader}>
        <button type="button" className={deleteAllButton} onClick={onDeleteAll}>
          전체삭제
        </button>
      </div>

      <div className={fileListScroll}>
        <div className={fileListTable}>
          <div className={fileListHeadRow} role="row">
            <span className={fileListHeadCell} role="columnheader">
              파일명
            </span>
            <span className={fileListHeadCell} role="columnheader">
              파일크기
            </span>
            <span className={fileListHeadCell} role="columnheader">
              추가일자
            </span>
            <span className={fileListHeadCellActions} role="columnheader">
              작업
            </span>
          </div>

          {files.map(({ id, file }) => (
            <div key={id} className={fileRow} role="row">
              <span className={fileNameCell} title={file.name}>
                {file.name}
              </span>
              <span className={fileMetaCell}>{formatFileSize(file.size)}</span>
              <span className={fileMetaCell}>
                {formatFileAddedDate(file)}
              </span>
              <div className={fileRowActions}>
                <button
                  type="button"
                  className={openFileButton}
                  onClick={() => openUploadedFile(file)}
                >
                  자료열기
                </button>
                <button
                  type="button"
                  className={removeFileButton}
                  aria-label={`${file.name} 삭제`}
                  onClick={() => onRemoveFile(id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={fileManagerFooter}>
        <button type="button" className={addMoreButton} onClick={onAddMore}>
          <Image
            src="/up-load-pupple.svg"
            alt=""
            width={15}
            height={15}
            aria-hidden
          />
          추가하기
        </button>
      </div>
    </div>
  );
};
