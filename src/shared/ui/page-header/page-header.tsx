import {
  pageHeader,
  pageHeaderDescription,
  pageHeaderTitle,
} from "@shared/ui/page-header/page-header.css";

type PageHeaderProps = {
  titleText: string;
  descriptionText: string;
};

export const PageHeader = ({
  titleText,
  descriptionText,
}: PageHeaderProps) => {
  return (
    <header className={pageHeader}>
      <h1 className={pageHeaderTitle}>{titleText}</h1>
      <p className={pageHeaderDescription}>{descriptionText}</p>
    </header>
  );
};
