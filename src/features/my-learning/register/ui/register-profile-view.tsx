import type { ReactNode } from "react";

import { Icon } from "@shared/ui";

import {
  confirmCard,
  confirmDescription,
  confirmHeader,
  confirmIcon,
  confirmTitle,
  fieldRow,
  profileBody,
  profileFieldBox,
  profileFieldLabel,
  profileFieldValue,
  profileGrid,
  profileRow,
  profileValueChip,
  rowContent,
  rowHeading,
  rowLabel,
  rowTitle,
  stepBadge,
} from "@features/my-learning/register/ui/register.css";

const EMPTY_VALUE = "-";

type RegisterProfileViewProps = {
  nickname: string;
  school: string;
  interests: string[];
  strengths: string[];
  personality: string[];
  learningTendencies: string[];
  materialFormats: string[];
  classStyles: string[];
  learningMethods: string[];
  teacherStyles: string[];
  teamMemberStyles: string[];
};

type SummarySectionProps = {
  step: number;
  title: string;
  children: ReactNode;
};

const displayText = (value: string) => value || EMPTY_VALUE;

const SummarySection = ({ step, title, children }: SummarySectionProps) => {
  return (
    <section className={profileRow} aria-labelledby={`register-step-${step}`}>
      <div className={rowHeading}>
        <span className={stepBadge}>{step}</span>
        <h3 id={`register-step-${step}`} className={rowTitle}>
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
};

const ProfileBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={profileFieldBox}>
      <span className={profileFieldLabel}>{label}</span>
      <strong className={profileFieldValue}>{displayText(value)}</strong>
    </div>
  );
};

const ChipList = ({ label, values }: { label: string; values: string[] }) => {
  const displayValues = values.length > 0 ? values : [EMPTY_VALUE];

  return (
    <div className={fieldRow}>
      <span className={rowLabel}>{label}</span>
      <div className={rowContent}>
        {displayValues.map((value, index) => (
          <span
            key={`${label}-${value || EMPTY_VALUE}-${index}`}
            className={profileValueChip}
          >
            {value || EMPTY_VALUE}
          </span>
        ))}
      </div>
    </div>
  );
};

export const RegisterProfileView = ({
  nickname,
  school,
  interests,
  strengths,
  personality,
  learningTendencies,
  materialFormats,
  classStyles,
  learningMethods,
  teacherStyles,
  teamMemberStyles,
}: RegisterProfileViewProps) => {
  return (
    <section className={confirmCard} aria-labelledby="register-profile-title">
      <header className={confirmHeader}>
        <span className={confirmIcon} aria-hidden="true">
          <Icon
            src="/my-learning-icon/check-box-pupple.svg"
            size="md"
          />
        </span>
        <div>
          <h2 id="register-profile-title" className={confirmTitle}>
            최종확인
          </h2>
          <p className={confirmDescription}>
            아래 내용으로 단권화 자료를 생성합니다. 확인 후 생성해주세요.
          </p>
        </div>
      </header>

      <div className={profileBody}>
        <SummarySection step={1} title="프로필">
          <div className={profileGrid}>
            <ProfileBox label="닉네임" value={nickname} />
            <ProfileBox label="소속" value={school} />
          </div>
        </SummarySection>

        <SummarySection step={2} title="사용자특성">
          <ChipList label="흥미" values={interests} />
          <ChipList label="적성" values={strengths} />
          <ChipList label="성격" values={personality} />
          <ChipList label="성향" values={learningTendencies} />
        </SummarySection>

        <SummarySection step={3} title="학습유형">
          <ChipList label="자료형식" values={materialFormats} />
          <ChipList label="수업방식" values={classStyles} />
          <ChipList label="학습방법" values={learningMethods} />
        </SummarySection>

        <SummarySection step={4} title="학습파트너">
          <ChipList label="교사스타일" values={teacherStyles} />
          <ChipList label="팀원스타일" values={teamMemberStyles} />
        </SummarySection>
      </div>
    </section>
  );
};
