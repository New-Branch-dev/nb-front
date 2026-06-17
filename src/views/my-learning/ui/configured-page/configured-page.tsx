import Link from "next/link";

import { Icon } from "@shared/ui";

import { ProfileCard, ProfileField } from "@entities/my-learning";

import {
  MY_LEARNING_DESCRIPTION,
  MY_LEARNING_TITLE,
} from "@views/my-learning/lib/content-title";
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
} from "@views/my-learning/ui/configured-page/configured-page.css";

const SAMPLE_PROFILE = {
  nickname: "뉴브랜치",
  ageText: "2015년생(만 11세)",
  school: "한국초등학교",
};

const EDIT_HREF = {
  profile: "/my-learning/edit/profile",
  learningStyle: "/my-learning/edit/learning-style",
  preferredLearningType: "/my-learning/edit/preferred-learning-type",
  preferredLearningTime: "/my-learning/edit/preferred-learning-time",
  preferredLearningPartner: "/my-learning/edit/preferred-learning-partner",
} as const;

export const MyLearningConfiguredPage = () => {
  return (
    <main className={pageRoot} aria-label="나만의 학습 설정 결과">
      <header className={header}>
        <h1 className={title}>{MY_LEARNING_TITLE}</h1>
        <p className={sectionTitle}>{MY_LEARNING_DESCRIPTION}</p>
      </header>

      <section className={contentGrid}>
        <ProfileCard
          title="프로필"
          icon="profile"
          className={profileCard}
          editHref={EDIT_HREF.profile}
        >
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

        <ProfileCard
          title="학습특성"
          icon="style"
          editHref={EDIT_HREF.learningStyle}
        >
          <ProfileField label="흥미" values={["국어", "영어"]} />
          <ProfileField label="적성" values={["언어"]} />
          <ProfileField label="성격" values={["꼼꼼함", "계획적"]} />
        </ProfileCard>

        <ProfileCard
          title="학습유형"
          icon="type"
          editHref={EDIT_HREF.preferredLearningType}
        >
          <ProfileField label="자료" values={["텍스트"]} />
          <ProfileField label="수업" values={["강의"]} />
          <ProfileField label="학습" values={["문제풀이"]} />
        </ProfileCard>

        <ProfileCard
          title="학습시간"
          icon="time"
          editHref={EDIT_HREF.preferredLearningTime}
        >
          <ProfileField label="쉬는날" values={["총 21일"]} />
        </ProfileCard>

        <ProfileCard
          title="학습파트너"
          icon="partner"
          className={partnerCard}
          editHref={EDIT_HREF.preferredLearningPartner}
        >
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
          홈으로 이동
        </Link>
      </div>
    </main>
  );
};
