import { ContainerInner, ContainerRoot } from "@shared/ui";
import { containerRootBackground } from "@shared/ui/container/Container.css";

import { RendigPage } from "@views/rendig";

export default function Home() {
  return (
    <ContainerRoot className={containerRootBackground.default}>
      <ContainerInner>
        <RendigPage />
      </ContainerInner>
    </ContainerRoot>
  );
}
