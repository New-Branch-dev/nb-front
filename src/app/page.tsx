import { Container, Flex, Section } from "@shared/ui/layout";

import { Navigation } from "@widgets/navigation";

import { pageStyle } from "./page.styles";

export default function Home() {
  return (
    <div className={pageStyle}>
      <Navigation />

      <main>
        <Section as="section" id="scene">
          <Container>
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap="1.5rem"
            >
              <h1>뉴브랜치</h1>

              <span>기존의 지식을 새로운 지식과 연결하여 학습하고</span>
              <span>또 다른 새로운 지식을 재창조해 보세요.</span>
            </Flex>
          </Container>
        </Section>

        <Section as="section" id="gallery">
          <></>
        </Section>
      </main>
    </div>
  );
}
