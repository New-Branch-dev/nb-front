import {
  createLearningGoalTextAttachment,
  deleteLearningGoalAttachment,
} from "@features/learning-goals/api/create-learning-goal-attachment";
import type { NoteCreationState } from "@features/learning-goals/model/store.types";

type SyncedDirectTextAttachment = {
  attachmentId: number | null;
  savedDirectText: string;
};

export const syncLearningGoalDirectTextAttachment = async ({
  directText,
  directTextAttachmentId,
  savedDirectText,
}: NoteCreationState): Promise<SyncedDirectTextAttachment> => {
  const normalizedDirectText = directText.trim();

  if (directTextAttachmentId && normalizedDirectText === savedDirectText) {
    return {
      attachmentId: directTextAttachmentId,
      savedDirectText,
    };
  }

  if (!normalizedDirectText) {
    if (directTextAttachmentId) {
      await deleteLearningGoalAttachment(directTextAttachmentId);
    }

    return {
      attachmentId: null,
      savedDirectText: "",
    };
  }

  const attachment = await createLearningGoalTextAttachment(
    "직접 입력 자료",
    normalizedDirectText,
  );

  try {
    if (directTextAttachmentId) {
      await deleteLearningGoalAttachment(directTextAttachmentId);
    }
  } catch (error) {
    await deleteLearningGoalAttachment(attachment.attachmentId);
    throw error;
  }

  return {
    attachmentId: attachment.attachmentId,
    savedDirectText: normalizedDirectText,
  };
};
