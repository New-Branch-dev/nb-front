import Link from "next/link";

import { PageHeader } from "@shared/ui";

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
  contentPanel,
  pageRoot,
  profileFieldBox,
  profileFieldGrid,
  profileFieldLabel,
  profileFieldValue,
} from "@views/my-learning/ui/configured-page/configured-page.css";

const SAMPLE_PROFILE = {
  nickname: "뉴브랜치",
  school: "한국중학교",
};

const EDIT_HREF = {
  profile: "/my-learning/edit/profile",
  learningStyle: "/my-learning/edit/learning-style",
  preferredLearningType: "/my-learning/edit/preferred-learning-type",
  preferredLearningPartner: "/my-learning/edit/preferred-learning-partner",
} as const;

export const MyLearningConfiguredPage = () => {
  return (
    <main className={pageRoot} aria-label="나만의 학습 설정 결과">
      <PageHeader
        titleText={MY_LEARNING_TITLE}
        descriptionText={MY_LEARNING_DESCRIPTION}
      />

      <section className={contentPanel}>
        <ProfileCard
          title="프로필"
          icon="profile"
          editHref={EDIT_HREF.profile}
        >
          <div className={profileFieldGrid}>
            <div className={profileFieldBox}>
              <span className={profileFieldLabel}>닉네임</span>
              <strong className={profileFieldValue}>
                {SAMPLE_PROFILE.nickname}
              </strong>
            </div>
            <div className={profileFieldBox}>
              <span className={profileFieldLabel}>소속</span>
              <strong className={profileFieldValue}>
                {SAMPLE_PROFILE.school}
              </strong>
            </div>
          </div>
        </ProfileCard>

        <ProfileCard
          title="사용자특성"
          icon="style"
          editHref={EDIT_HREF.learningStyle}
        >
          <ProfileField
            label="흥미"
            values={["언어·문학", "과학·탐구", "기술·AI"]}
          />
          <ProfileField label="적성" values={["논리적 사고", "언어 능력"]} />
          <ProfileField label="성향" values={["개방성", "자기주도성", "탐구성"]} />
          <ProfileField label="성향" values={["자기주도형", "탐구형", "몰입형"]} />
        </ProfileCard>

        <ProfileCard
          title="학습유형"
          icon="type"
          editHref={EDIT_HREF.preferredLearningType}
        >
          <ProfileField
            label="자료형식"
            values={["글·문서 자료", "시각 자료", "구조화 자료"]}
          />
          <ProfileField
            label="수업방식"
            values={["설명 중심 수업", "문제 해결 수업", "맞춤형 개별 수업"]}
          />
          <ProfileField
            label="학습방법"
            values={["이해 중심 학습", "반복 학습", "정리 학습"]}
          />
        </ProfileCard>

        <ProfileCard
          title="학습파트너"
          icon="partner"
          editHref={EDIT_HREF.preferredLearningPartner}
        >
          <ProfileField
            label="교사스타일"
            values={["코칭형", "피드백형", "동기부여형"]}
          />
          <ProfileField
            label="팀원스타일"
            values={["협동형", "성장형", "탐구형"]}
          />
        </ProfileCard>
      </section>

      <div className={actions}>
        <Link
          href="/my-learning/profile"
          className={`${actionLink} ${actionSecondary}`}
        >
          전체 수정
        </Link>
        <Link href="/" className={`${actionLink} ${actionRow}`}>
          홈으로 이동
        </Link>
      </div>
    </main>
  );
};
