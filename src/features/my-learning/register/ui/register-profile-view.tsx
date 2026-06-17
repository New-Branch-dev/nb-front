import {
  cardTitle,
  fieldPair,
  mutedKey,
  profileBody,
  profileRow,
  profileValueChip,
  rowContent,
  rowLabel,
} from "@features/my-learning/register/ui/register.css";

const EMPTY_VALUE = "-";

type RegisterProfileViewProps = {
  nickname: string;
  school: string;
  interests: string[];
  strengths: string[];
  personality: string;
  restDates: string[];
  materialFormats: string[];
  classStyles: string[];
  learningMethods: string[];
  teacherTypes: string[];
  friendTypes: string[];
  userTypes: string[];
};

const ProfileField = ({
  label,
  value,
}: {
  label: string;
  value: string | string[];
}) => {
  const values = Array.isArray(value) ? value : [value];
  const displayValues = values.length > 0 ? values : [EMPTY_VALUE];

  return (
    <span className={fieldPair}>
      <span className={mutedKey}>{label}</span>
      {displayValues.map((displayValue, index) => (
        <span
          key={`${label}-${displayValue || EMPTY_VALUE}-${index}`}
          className={profileValueChip}
        >
          {displayValue || EMPTY_VALUE}
        </span>
      ))}
    </span>
  );
};

export const RegisterProfileView = ({
  nickname,
  school,
  interests,
  strengths,
  personality,
  restDates,
  materialFormats,
  classStyles,
  learningMethods,
  teacherTypes,
  friendTypes,
  userTypes,
}: RegisterProfileViewProps) => {
  return (
    <section aria-labelledby="register-profile-title">
      <h2 id="register-profile-title" className={cardTitle}>
        내 학습 프로필
      </h2>

      <div className={profileBody}>
        <div className={profileRow}>
          <div className={rowLabel}>프로필</div>
          <div className={rowContent}>
            <ProfileField label="닉네임" value={nickname} />
            <ProfileField label="소속" value={school} />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습특성</div>
          <div className={rowContent}>
            <ProfileField label="흥미" value={interests} />
            <ProfileField label="적성" value={strengths} />
            <ProfileField label="성격" value={personality} />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>쉬는날</div>
          <div className={rowContent}>
            <ProfileField label="쉬는날" value={restDates} />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습유형</div>
          <div className={rowContent}>
            <ProfileField label="자료" value={materialFormats} />
            <ProfileField label="수업" value={classStyles} />
            <ProfileField label="학습" value={learningMethods} />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습파트너</div>
          <div className={rowContent}>
            <ProfileField label="교사" value={teacherTypes} />
            <ProfileField label="친구" value={friendTypes} />
            <ProfileField label="본인" value={userTypes} />
          </div>
        </div>
      </div>
    </section>
  );
};
