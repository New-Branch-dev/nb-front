import Link from "next/link";

import { Flex, Section } from "@shared/ui/layout";

import { Navigation } from "@widgets/navigation";
import { Slider } from "@widgets/slider";

import { pageStyle } from "./page.styles";

export default function Home() {
  return (
    <div className={pageStyle}>
      <Navigation />

      <main>
        <Section as="section" id="scene" paddingTop="8rem">
          <Flex direction="column" align="center" justify="center" gap="1.5rem">
            <h1>뉴브랜치</h1>

            <span>기존의 지식을 새로운 지식과 연결하여 학습하고</span>
            <span>또 다른 새로운 지식을 재창조해 보세요.</span>
          </Flex>
        </Section>

        <Section
          as="section"
          id="slider"
          paddingBlock="4rem"
          paddingInline="7rem"
        >
          <Slider
            items={[
              {
                id: "1",
                card: <div>1</div>,
              },
              {
                id: "2",
                card: <div>2</div>,
              },
              {
                id: "3",
                card: <div>1</div>,
              },
              {
                id: "4",
                card: <div>2</div>,
              },
            ]}
          />
        </Section>
      </main>

      <Flex
        as="footer"
        align="center"
        justify="space-between"
        gap="1.5rem"
        style={{ backgroundColor: "#171717" }}
        padding="2rem"
      >
        <h3>뉴브랜치</h3>

        <Flex gap="1.5rem" width="auto">
          <Link href="/">개인정보처리방침</Link>
          <Link href="/">이용약관</Link>
        </Flex>
      </Flex>
    </div>
  );
}
