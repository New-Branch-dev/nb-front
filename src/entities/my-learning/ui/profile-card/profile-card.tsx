import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@shared/ui";

import {
  card,
  cardHeader,
  cardIcon,
  cardTitle,
  editButton,
} from "@entities/my-learning/ui/profile-card/profile-card.css";

export type MyLearningProfileCardIcon =
  | "profile"
  | "style"
  | "type"
  | "time"
  | "partner";

type MyLearningProfileCardProps = {
  title: string;
  icon: MyLearningProfileCardIcon;
  children: ReactNode;
  className?: string;
  editHref: string;
};

const ICON_SRC: Record<MyLearningProfileCardIcon, string> = {
  profile: "/my-learning-icon/profile-icon.svg",
  style: "/my-learning-icon/setting-icon.svg",
  type: "/my-learning-icon/book-icon.svg",
  time: "/my-learning-icon/clock-icon.svg",
  partner: "/my-learning-icon/partner-icon.svg",
};

export const ProfileCard = ({
  title,
  icon,
  children,
  className,
  editHref,
}: MyLearningProfileCardProps) => {
  const mergedClassName = [card, className].filter(Boolean).join(" ");

  return (
    <article className={mergedClassName}>
      <div className={cardHeader}>
        <span className={cardIcon}>
          <Icon src={ICON_SRC[icon]} size="md" />
        </span>
        <h2 className={cardTitle}>{title}</h2>

        <Link
          href={editHref}
          className={editButton}
          aria-label={`${title} 수정`}
        >
          <Icon src="/my-learning-icon/pencil.svg" size="md" />
        </Link>
      </div>
      {children}
    </article>
  );
};
