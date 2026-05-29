import { ContainerInner, ContainerRoot } from "@shared/ui";
import { containerRootBackground } from "@shared/ui/container/Container.css";

import { Footer } from "@widgets/footer/ui/Footer";

const ContentsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ContainerRoot className={containerRootBackground.auth}>
      <ContainerInner>
        {children}
        <Footer />
      </ContainerInner>
    </ContainerRoot>
  );
};

export default ContentsLayout;
