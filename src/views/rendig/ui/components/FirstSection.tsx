import Image from "next/image";
import Link from "next/link";

import {
  firstSection,
  firstSectionActionGroup,
  firstSectionCaption,
  firstSectionContent,
  firstSectionDescription,
  firstSectionDescriptionBlock,
  firstSectionGuestLink,
  firstSectionInner,
  firstSectionShowcase,
  firstSectionShowcaseBadge,
  firstSectionShowcaseCaption,
  firstSectionShowcaseImage,
  firstSectionShowcaseLink,
  firstSectionShowcaseLinkGroup,
  firstSectionShowcaseText,
  firstSectionSigninLink,
  firstSectionTitle,
} from "./FirstSection.css";

export function FirstSection() {
  return (
    <section className={firstSection} aria-label="랜딩 첫 번째 섹션">
      <p className={firstSectionCaption}>뉴브랜치</p>

      <div className={firstSectionContent}>
        <header className={firstSectionInner}>
          <h1
            className={firstSectionTitle}
            dangerouslySetInnerHTML={{
              __html: "지식의 새로운 가지를 \n뻗어 나가는 공간",
            }}
          />
          <section
            className={firstSectionDescriptionBlock}
            aria-label="랜딩 소개 및 액션"
          >
            <p
              className={firstSectionDescription}
              dangerouslySetInnerHTML={{
                __html:
                  "기존의 지식을 새로운 지식과 연결하여 학습하고\n또 다른 새로운 지식을 재창조해 보세요.",
              }}
            />

            <nav
              className={firstSectionActionGroup}
              aria-label="랜딩 주요 액션"
            >
              <Link href="/" className={firstSectionGuestLink}>
                로그인 없이 이용
              </Link>
              <Link href="/sign-in" className={firstSectionSigninLink}>
                로그인
              </Link>
            </nav>
          </section>
        </header>

        <figure className={firstSectionShowcase}>
          <figcaption className={firstSectionShowcaseCaption}>
            <p className={firstSectionShowcaseBadge}>New</p>
            <p
              className={firstSectionShowcaseText}
              dangerouslySetInnerHTML={{
                __html: "새로운 학습공간 \n뉴브랜치를 소개합니다!",
              }}
            />

            <figcaption className={firstSectionShowcaseLinkGroup}>
              <Link href="/learning-goals" className={firstSectionShowcaseLink}>
                자세히 알아보기
              </Link>
              <Image
                src="/Vector.png"
                alt="랜딩 첫 번째 섹션 이미지"
                width={5}
                height={10}
                quality={100}
              />
            </figcaption>
          </figcaption>
          <Image
            className={firstSectionShowcaseImage}
            src="/rendig-section-1.png"
            alt="랜딩 첫 번째 섹션 이미지"
            width={500}
            height={500}
            quality={100}
          />
        </figure>
      </div>
    </section>
  );
}
