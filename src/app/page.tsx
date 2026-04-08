import { Container, Flex, Section } from '@shared/ui/layout';

import { Navigation } from '@widgets/navigation';

import {
  cardGridStyle,
  cardStyle,
  heroBodyStyle,
  heroHeadingStyle,
  pageStyle,
  sectionTitleStyle,
} from './page.styles';

export default function Home() {
  return (
    <div className={pageStyle}>
      <Navigation />

      <main>
        <Section as="section" id="scene">
          <Container>
            <Flex direction="column" gap="1.5rem">
              <h1 className={heroHeadingStyle}>Light, Grain, Silence.</h1>
              <p className={heroBodyStyle}>
                프레임은 흐르고, 장면은 쌓이고, 감정은 오래 남습니다. 모든 컴포넌트는 반응형
                레이아웃을 기본으로 구성해 어떤 화면에서도 동일한 호흡으로 보이도록 설계합니다.
              </p>
            </Flex>
          </Container>
        </Section>

        <Section as="section" id="gallery">
          <Container>
            <h2 className={sectionTitleStyle}>Gallery</h2>
            <div className={cardGridStyle}>
              <article className={cardStyle}>
                <h3>Wide Shot</h3>
                <p>도시의 빛과 인물의 실루엣을 넓은 화면비로 담아낸 장면.</p>
              </article>
              <article className={cardStyle}>
                <h3>Close-up</h3>
                <p>짧은 대사와 긴 정적을 대비해 표정의 미세한 떨림을 강조.</p>
              </article>
              <article className={cardStyle}>
                <h3>Final Cut</h3>
                <p>고요한 페이드아웃으로 여운을 남기는 엔딩 시퀀스.</p>
              </article>
            </div>
          </Container>
        </Section>
      </main>

      <Section as="footer" id="credits">
        <Container>
          <small>Cinematic UI Prototype - Built with FSD + Emotion</small>
        </Container>
      </Section>
    </div>
  );
}
