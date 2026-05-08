import { ContainerInner, ContainerRoot } from "@shared/ui";
import { containerRootBackground } from "@shared/ui/container/Container.css";

const ContentsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ContainerRoot className={containerRootBackground.auth}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerRoot>
  );
};

export default ContentsLayout;
