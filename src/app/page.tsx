import { ContainerInner, ContainerRoot } from "@shared/ui";
import { containerRootBackground } from "@shared/ui/container/Container.css";

import { RendigPage } from "@views/rendig";

const Home = () => {
  return (
    <ContainerRoot className={containerRootBackground.default}>
      <ContainerInner>
        <RendigPage />
      </ContainerInner>
    </ContainerRoot>
  );
};

export default Home;
