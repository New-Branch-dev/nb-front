import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@shared/ui";
import { buttonRecipe } from "@shared/ui/button/Button.css";

import {
  actionButton,
  actionRow,
  editColumn,
  editPanel,
  editTitle,
  pageRoot,
} from "@views/learning-goals/ui/edit-page/edit-page.css";

type LearningGoalsEditPageViewProps = {
  children: ReactNode;
  title: string;
  cancelHref: string;
  canSubmit: boolean;
  onSubmit: () => void;
};

export const LearningGoalsEditPageView = ({
  children,
  title,
  cancelHref,
  canSubmit,
  onSubmit,
}: LearningGoalsEditPageViewProps) => {
  return (
    <section className={pageRoot} aria-label={`${title} 수정 페이지`}>
      <div className={editColumn}>
        <h2 className={editTitle}>{title} 수정</h2>

        <div className={editPanel}>{children}</div>

        <div className={actionRow}>
          <Link
            href={cancelHref}
            className={[
              buttonRecipe({ size: "lg", variant: "secondary" }),
              actionButton,
            ].join(" ")}
          >
            취소
          </Link>
          <Button
            type="button"
            size="lg"
            className={actionButton}
            disabled={!canSubmit}
            onClick={onSubmit}
          >
            수정
          </Button>
        </div>
      </div>
    </section>
  );
};
