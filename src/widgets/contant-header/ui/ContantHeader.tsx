import { description, header, title } from "@widgets/contant-header/ui/ContantHeader.css";

type ContantHeaderProps = {
  titleText: string;
  descriptionText: string;
};

export const ContantHeader = ({
  titleText,
  descriptionText,
}: ContantHeaderProps) => {
  return (
    <header className={header}>
      <h1 className={title}>{titleText}</h1>
      <p className={description}>{descriptionText}</p>
    </header>
  );
};
