import type { PropsWithChildren } from "react";

import {
  sectionCard,
  sectionCardStack,
  sectionDescription,
  sectionHeader,
  sectionTitle,
} from "@shared/ui/section-card/SectionCard.css";

type SectionCardStackProps = PropsWithChildren<{
  className?: string;
}>;

type SectionCardProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

export const SectionCardStack = ({
  children,
  className,
}: SectionCardStackProps) => {
  const mergedClassName = [sectionCardStack, className]
    .filter(Boolean)
    .join(" ");

  return <div className={mergedClassName}>{children}</div>;
};

export const SectionCard = ({
  title,
  description,
  children,
}: SectionCardProps) => {
  return (
    <article className={sectionCard}>
      <div className={sectionHeader}>
        <h3 className={sectionTitle}>{title}</h3>
        {description ? (
          <span className={sectionDescription}>{description}</span>
        ) : null}
      </div>
      {children}
    </article>
  );
};
