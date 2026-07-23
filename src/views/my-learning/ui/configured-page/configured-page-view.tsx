import Link from "next/link";
import { Activity } from "react";

import { PageHeader } from "@shared/ui";

import {
  type MyLearningProfile,
  ProfileCard,
  ProfileField,
} from "@entities/my-learning";

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
  statusMessage,
} from "@views/my-learning/ui/configured-page/configured-page.css";

const EDIT_HREF = {
  profile: "/my-learning/edit/profile",
  learningStyle: "/my-learning/edit/learning-style",
  preferredLearningType: "/my-learning/edit/preferred-learning-type",
  preferredLearningPartner: "/my-learning/edit/preferred-learning-partner",
} as const;

const EMPTY_PROFILE: MyLearningProfile = {
  usersId: 0,
  nickname: "",
  schoolName: "",
  interestList: [],
  strengthList: [],
  personalityList: [],
  learningTendencyList: [],
  preferredMaterialFormatList: [],
  preferredClassStyleList: [],
  preferredStudyMethodList: [],
  preferredTeacherStyleList: [],
  preferredFriendStyleList: [],
};

type MyLearningConfiguredPageViewProps = {
  profile: MyLearningProfile | null;
  errorMessage: string;
};

export const MyLearningConfiguredPageView = ({
  profile,
  errorMessage,
}: MyLearningConfiguredPageViewProps) => {
  const displayedProfile = profile ?? EMPTY_PROFILE;

  return (
    <main className={pageRoot} aria-label="나만의 학습 설정 결과">
      <PageHeader
        titleText={MY_LEARNING_TITLE}
        descriptionText={MY_LEARNING_DESCRIPTION}
      />

      <Activity mode={profile ? "visible" : "hidden"}>
        <>
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
                    {displayedProfile.nickname}
                  </strong>
                </div>
                <div className={profileFieldBox}>
                  <span className={profileFieldLabel}>소속</span>
                  <strong className={profileFieldValue}>
                    {displayedProfile.schoolName}
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
                values={displayedProfile.interestList}
              />
              <ProfileField
                label="적성"
                values={displayedProfile.strengthList}
              />
              <ProfileField
                label="성격"
                values={displayedProfile.personalityList}
              />
              <ProfileField
                label="학습성향"
                values={displayedProfile.learningTendencyList}
              />
            </ProfileCard>

            <ProfileCard
              title="학습유형"
              icon="type"
              editHref={EDIT_HREF.preferredLearningType}
            >
              <ProfileField
                label="자료형식"
                values={displayedProfile.preferredMaterialFormatList}
              />
              <ProfileField
                label="수업방식"
                values={displayedProfile.preferredClassStyleList}
              />
              <ProfileField
                label="학습방법"
                values={displayedProfile.preferredStudyMethodList}
              />
            </ProfileCard>

            <ProfileCard
              title="학습파트너"
              icon="partner"
              editHref={EDIT_HREF.preferredLearningPartner}
            >
              <ProfileField
                label="교사스타일"
                values={displayedProfile.preferredTeacherStyleList}
              />
              <ProfileField
                label="팀원스타일"
                values={displayedProfile.preferredFriendStyleList}
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
        </>
      </Activity>

      <Activity mode={!profile ? "visible" : "hidden"}>
        <p className={statusMessage} role={errorMessage ? "alert" : "status"}>
          {errorMessage || "학습 프로필 정보를 불러오는 중입니다."}
        </p>
      </Activity>
    </main>
  );
};
