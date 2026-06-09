import Link from "next/link";

import { Icon } from "@shared/ui";

import { ProfileCard, ProfileField } from "@entities/my-learning";

import {
  MY_LEARNING_DESCRIPTION,
  MY_LEARNING_TITLE,
} from "../../lib/content-title";
import {
  actionLink,
  actionRow,
  actions,
  actionSecondary,
  contentGrid,
  header,
  pageRoot,
  partnerCard,
  profileAge,
  profileBody,
  profileCard,
  profileInfo,
  profileName,
  sectionTitle,
  title,
} from "./configured-page.css";

const SAMPLE_PROFILE = {
  nickname: "뉴브랜치",
  ageText: "2015년생(만 11세)",
  school: "한국초등학교",
};

export const MyLearningConfiguredPage = () => {
  return (
    <main className={pageRoot} aria-label="나만의 학습 설정 결과">
      <header className={header}>
        <h1 className={title}>{MY_LEARNING_TITLE}</h1>
        <p className={sectionTitle}>{MY_LEARNING_DESCRIPTION}</p>
      </header>

      <section className={contentGrid}>
        <ProfileCard title="프로필" icon="profile" className={profileCard}>
          <div className={profileBody}>
            <Icon src="/brand-icon.svg" size="lg" />

            <div className={profileInfo}>
              <strong className={profileName}>{SAMPLE_PROFILE.nickname}</strong>
              <span className={profileAge}>
                {SAMPLE_PROFILE.ageText} · {SAMPLE_PROFILE.school}
              </span>
            </div>
          </div>
        </ProfileCard>

        <ProfileCard title="학습특성" icon="style">
          <ProfileField label="흥미" values={["국어", "영어"]} />
          <ProfileField label="적성" values={["언어"]} />
          <ProfileField label="성격" values={["꼼꼼함", "계획적"]} />
        </ProfileCard>

        <ProfileCard title="학습유형" icon="type">
          <ProfileField label="자료" values={["텍스트"]} />
          <ProfileField label="수업" values={["강의"]} />
          <ProfileField label="학습" values={["문제풀이"]} />
        </ProfileCard>

        <ProfileCard title="학습시간" icon="time">
          <ProfileField label="하루" values={["16:00 - 21:00"]} />
          <ProfileField label="쉬는날" values={["총 21일"]} />
        </ProfileCard>

        <ProfileCard title="학습파트너" icon="partner" className={partnerCard}>
          <ProfileField label="교사" values={["코칭"]} />
          <ProfileField label="친구" values={["리더"]} />
          <ProfileField label="본인" values={["협동"]} />
        </ProfileCard>
      </section>

      <div className={actions}>
        <Link
          href="/my-learning/profile"
          className={`${actionLink} ${actionSecondary}`}
        >
          전체 수정
        </Link>
        <Link href="/learning-goals" className={`${actionLink} ${actionRow}`}>
          학습 시작하기
        </Link>
      </div>
    </main>
  );
};
