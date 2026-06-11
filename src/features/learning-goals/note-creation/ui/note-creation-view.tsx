import { Activity } from "react";
import type { ChangeEvent, DragEvent, RefObject } from "react";

import { Button, Icon, Input } from "@shared/ui";

import {
  cardHeaderStack,
  cardHeading,
  cardLead,
  deleteConfirmActions,
  deleteConfirmMessage,
  deleteConfirmTitle,
  dropzoneBody,
  dropzoneFormats,
  dropzoneHint,
  fieldsStack,
  hiddenFileInput,
  tabPanel,
  uploadButton,
} from "@features/learning-goals/note-creation/ui/note-creation.css";
import {
  addMoreButton,
  deleteAllButton,
  fileListHeadCell,
  fileListHeadCellActions,
  fileListHeadCellDate,
  fileListHeadRow,
  fileListScroll,
  fileListTable,
  fileManagerCard,
  fileManagerFooter,
  fileManagerHeader,
} from "@features/learning-goals/note-creation/ui/note-upload-shell.css";
import {
  UploadedNoteFileRow,
  type UploadedNoteFileRowItem,
} from "@features/learning-goals/note-creation/ui/uploaded-note-file-row";

// eslint-disable-next-line no-restricted-imports -- 요청에 따라 전체 삭제 확인에 공통 Modal shell을 직접 조립합니다.
import { Modal } from "@widgets/modal";

type NoteCreationViewProps = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  uploadedFileList: UploadedNoteFileRowItem[];
  isDragging: boolean;
  onUploadClick: () => void;
  onDeleteAll: () => void;
  onRemoveFile: (fileId: string) => void;
  onOpenFile: (fileId: string) => void;
  onFileInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDropzoneDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDropzoneDragLeave: () => void;
  onDropzoneDrop: (event: DragEvent<HTMLDivElement>) => void;
};

export const NoteCreationView = ({
  fileInputRef,
  uploadedFileList,
  isDragging,
  onUploadClick,
  onDeleteAll,
  onRemoveFile,
  onOpenFile,
  onFileInputChange,
  onDropzoneDragOver,
  onDropzoneDragLeave,
  onDropzoneDrop,
}: NoteCreationViewProps) => {
  const hasUploadedFiles = uploadedFileList.length > 0;

  return (
    <div className={tabPanel} role="tabpanel">
      <div className={cardHeaderStack}>
        <h2 className={cardHeading}>학습 자료 수집</h2>
        <p className={cardLead}>
          해당 목표에 필요한 파일이나 텍스트를 모아주세요
        </p>
      </div>

      <div className={fieldsStack}>
        <Input
          name="learning-goals-direct-text"
          placeholder="텍스트를 입력하거나 붙여넣어주세요 (예:강의 필기 자료, 블로그 글등)"
          aria-label="학습 자료에 사용할 텍스트"
        />

        <div
          className={fileManagerCard}
          onDragOver={onDropzoneDragOver}
          onDragLeave={onDropzoneDragLeave}
          onDrop={onDropzoneDrop}
        >
          <input
            ref={fileInputRef}
            className={hiddenFileInput}
            type="file"
            multiple
            onChange={onFileInputChange}
            aria-label="학습 자료 파일 업로드"
          />

          <div className={fileManagerHeader}>
            <Activity mode={hasUploadedFiles ? "visible" : "hidden"}>
              <Modal
                triggerText="전체삭제"
                triggerAriaLabel="업로드한 파일 전체 삭제"
                triggerClassName={deleteAllButton}
              >
                {({ close }) => (
                  <>
                    <h2 className={deleteConfirmTitle}>파일 전체 삭제</h2>
                    <p className={deleteConfirmMessage}>
                      정말 삭제 하시겠습니까?
                    </p>
                    <div className={deleteConfirmActions}>
                      <Button type="button" variant="ghost" onClick={close}>
                        취소
                      </Button>
                      <Button
                        type="button"
                        onClick={(event) => {
                          event.currentTarget.closest("dialog")?.close();
                          close();
                          onDeleteAll();
                        }}
                      >
                        삭제
                      </Button>
                    </div>
                  </>
                )}
              </Modal>
            </Activity>
          </div>

          <Activity mode={hasUploadedFiles ? "visible" : "hidden"}>
            <div className={fileListScroll}>
              <div
                className={fileListTable}
                role="table"
                aria-label="업로드한 파일"
              >
                <div className={fileListHeadRow} role="row">
                  <span className={fileListHeadCell} role="columnheader">
                    파일명
                  </span>
                  <span className={fileListHeadCell} role="columnheader">
                    파일크기
                  </span>
                  <span className={fileListHeadCellDate} role="columnheader">
                    추가일자
                  </span>
                  <span className={fileListHeadCellActions} role="columnheader">
                    작업
                  </span>
                  <span className={fileListHeadCellActions} role="columnheader">
                    삭제
                  </span>
                </div>

                {uploadedFileList.map((file) => (
                  <UploadedNoteFileRow
                    key={file.id}
                    file={file}
                    canOpen={Boolean(file.file)}
                    onOpenFile={onOpenFile}
                    onRemoveFile={onRemoveFile}
                  />
                ))}
              </div>
            </div>

            <div className={fileManagerFooter}>
              <Button
                type="button"
                variant="secondary"
                size="md"
                className={addMoreButton}
                onClick={onUploadClick}
              >
                <Icon src="/up-load-pupple.svg" size="sm" aria-hidden />
                추가하기
              </Button>
            </div>
          </Activity>

          <Activity mode={hasUploadedFiles ? "hidden" : "visible"}>
            <div className={dropzoneBody} data-dragging={isDragging}>
              <Button
                type="button"
                variant="secondary"
                size="md"
                className={uploadButton}
                onClick={onUploadClick}
              >
                <Icon src="/up-load-pupple.svg" size="sm" aria-hidden />
                업로드
              </Button>
              <p className={dropzoneHint}>
                파일을 업로드하거나 마우스로 끌어오세요
              </p>
              <p className={dropzoneFormats}>PPT, Word, PDF, 오디오 등</p>
            </div>
          </Activity>
        </div>
      </div>
    </div>
  );
};
