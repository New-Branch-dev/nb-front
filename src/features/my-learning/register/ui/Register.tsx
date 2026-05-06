import {
  aiBadge,
  aiChangeButton,
  aiInner,
  aiPanel,
  aiPanelTitle,
  aiRow,
  aiRowActions,
  aiRowLabel,
  cardTitle,
  emphasisValue,
  inlineDot,
  mutedKey,
  profileCard,
  profileInner,
  profileRow,
  rowContent,
  rowLabel,
} from "./Register.css";

export const Register = () => {
  return (
    <>
      <section className={profileCard} aria-labelledby="register-profile-title">
        <h2 id="register-profile-title" className={cardTitle}>
          내 학습 프로필
        </h2>
        <div className={profileInner}>
          <div className={profileRow}>
            <div className={rowLabel}>프로필</div>
            <div className={rowContent}>
              <span className={mutedKey}>닉네임</span>
              <span className={emphasisValue}>뉴브랜치</span>
              <span className={mutedKey}>나이</span>
              <span className={emphasisValue}>2010년(만 15세)</span>
              <span className={mutedKey}>소속</span>
              <span className={emphasisValue}>서울초등학교</span>
            </div>
          </div>

          <div className={profileRow}>
            <div className={rowLabel}>학습특성</div>
            <div className={rowContent}>
              <span className={mutedKey}>흥미</span>
              <span className={emphasisValue}>국어</span>
              <span className={inlineDot} aria-hidden>
                ·
              </span>
              <span className={emphasisValue}>영어</span>
              <span className={mutedKey}>적성</span>
              <span className={emphasisValue}>언어</span>
              <span className={mutedKey}>성격</span>
              <span className={emphasisValue}>꼼꼼함</span>
              <span className={inlineDot} aria-hidden>
                ·
              </span>
              <span className={emphasisValue}>계획적</span>
            </div>
          </div>

          <div className={profileRow}>
            <div className={rowLabel}>학습시간</div>
            <div className={rowContent}>
              <span className={mutedKey}>하루</span>
              <span className={emphasisValue}>16:00 - 20:00</span>
              <span className={mutedKey}>쉬는날</span>
              <span className={emphasisValue}>생일</span>
              <span className={inlineDot} aria-hidden>
                ·
              </span>
              <span className={emphasisValue}>공휴일</span>
              <span className={inlineDot} aria-hidden>
                ·
              </span>
              <span className={emphasisValue}>지정일</span>
            </div>
          </div>

          <div className={profileRow}>
            <div className={rowLabel}>학습유형</div>
            <div className={rowContent}>
              <span className={mutedKey}>자료</span>
              <span className={emphasisValue}>텍스트</span>
              <span className={mutedKey}>수업</span>
              <span className={emphasisValue}>강의</span>
              <span className={mutedKey}>학습</span>
              <span className={emphasisValue}>문제풀이</span>
            </div>
          </div>

          <div className={profileRow}>
            <div className={rowLabel}>학습파트너</div>
            <div className={rowContent}>
              <span className={mutedKey}>교사</span>
              <span className={emphasisValue}>코칭</span>
              <span className={mutedKey}>친구</span>
              <span className={emphasisValue}>활력</span>
              <span className={mutedKey}>본인</span>
              <span className={emphasisValue}>리더</span>
            </div>
          </div>
        </div>
      </section>

      <section className={aiPanel} aria-labelledby="register-ai-title">
        <h2 id="register-ai-title" className={aiPanelTitle}>
          AI 분석
        </h2>
        <div className={aiInner}>
          <div className={aiRow}>
            <p className={aiRowLabel}>나의 학습 스타일</p>
            <div className={aiRowActions}>
              <span className={aiBadge}>시각적 학습자</span>
              <button type="button" className={aiChangeButton}>
                변경
              </button>
            </div>
          </div>
          <div className={aiRow}>
            <p className={aiRowLabel}>추천 학습법</p>
            <div className={aiRowActions}>
              <span className={aiBadge}>블렌디드 러닝</span>
              <button type="button" className={aiChangeButton}>
                변경
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
