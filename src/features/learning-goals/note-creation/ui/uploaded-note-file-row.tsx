import { Button } from "@shared/ui";

import {
  fileDateCell,
  fileMetaCell,
  fileNameCell,
  fileRow,
  fileRowActions,
  openFileButton,
  removeFileButton,
} from "@features/learning-goals/note-creation/ui/note-upload-shell.css";

export type UploadedNoteFileRowItem = {
  id: string;
  file?: File;
  name: string;
  sizeLabel: string;
  addedAtLabel: string;
};

type UploadedNoteFileRowProps = {
  file: UploadedNoteFileRowItem;
  canOpen: boolean;
  onOpenFile: (fileId: string) => void;
  onRemoveFile: (fileId: string) => void;
};

export const UploadedNoteFileRow = ({
  file,
  canOpen,
  onOpenFile,
  onRemoveFile,
}: UploadedNoteFileRowProps) => {
  return (
    <div className={fileRow} role="row">
      <span className={fileNameCell} role="cell">
        {file.name}
      </span>
      <span className={fileMetaCell} role="cell">
        {file.sizeLabel}
      </span>
      <span className={fileDateCell} role="cell">
        {file.addedAtLabel}
      </span>
      <div className={fileRowActions} role="cell">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className={openFileButton}
          disabled={!canOpen}
          onClick={() => onOpenFile(file.id)}
        >
          자료열기
        </Button>
      </div>
      <div className={fileRowActions} role="cell">
        <Button
          type="button"
          variant="text"
          size="sm"
          className={removeFileButton}
          aria-label={`${file.name} 삭제`}
          onClick={() => onRemoveFile(file.id)}
        >
          ×
        </Button>
      </div>
    </div>
  );
};
