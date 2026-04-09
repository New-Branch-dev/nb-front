"use client";

import Link from "next/link";

import { ContainerInner, ContainerRoot, Flex, Section } from "@shared/ui";

import { Slider } from "@widgets/slider";

export const MainPage = () => {
  return (
    <ContainerRoot>
      <ContainerInner>
        <Section as="article" id="scene" paddingBlock="0">
          <Flex direction="column" align="center" justify="center" gap="1.5rem">
            <p>지식의 새로운 가지를 뻗어 나가세요</p>
            <h1>뉴브랜치</h1>

            <p
              style={{ whiteSpace: "pre-line", textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html:
                  "기존의 지식을 새로운 지식과 연결하여 학습하고\n또 다른 새로운 지식을 재창조해 보세요.",
              }}
            ></p>
          </Flex>
        </Section>

        <Section as="section" id="slider">
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
      </ContainerInner>

      <Flex
        as="footer"
        align="center"
        justify="space-between"
        backgroundColor="#171717"
        color="#ffffff"
        padding="2rem"
      >
        <h3>뉴브랜치</h3>

        <Flex gap="1.5rem" width="auto">
          <Link href="/">개인정보처리방침</Link>
          <Link href="/">이용약관</Link>
        </Flex>
      </Flex>
    </ContainerRoot>
  );
};
