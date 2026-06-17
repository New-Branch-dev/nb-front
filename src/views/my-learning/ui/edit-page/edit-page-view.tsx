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
} from "@views/my-learning/ui/edit-page/edit-page.css";

type MyLearningEditPageViewProps = {
  children: ReactNode;
  title: string;
  canSubmit: boolean;
  onSubmit: () => void;
};

export const MyLearningEditPageView = ({
  children,
  title,
  canSubmit,
  onSubmit,
}: MyLearningEditPageViewProps) => {
  return (
    <section className={pageRoot} aria-label={`${title} 수정 페이지`}>
      <div className={editColumn}>
        <h2 className={editTitle}>{title} 수정</h2>

        <div className={editPanel}>{children}</div>

        <div className={actionRow}>
          <Link
            href="/my-learning/result"
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
