import {
  cardTitle,
  fieldPair,
  mutedKey,
  profileBody,
  profileRow,
  profileValueChip,
  rowContent,
  rowLabel,
} from "./Register.css";

const EMPTY_VALUE = "-";

const ProfileField = ({
  label,
  value = EMPTY_VALUE,
}: {
  label: string;
  value?: string;
}) => (
  <span className={fieldPair}>
    <span className={mutedKey}>{label}</span>
    <span className={profileValueChip}>{value}</span>
  </span>
);

export const RegisterProfile = () => {
  return (
    <section aria-labelledby="register-profile-title">
      <h2 id="register-profile-title" className={cardTitle}>
        내 학습 프로필
      </h2>

      <div className={profileBody}>
        <div className={profileRow}>
          <div className={rowLabel}>프로필</div>
          <div className={rowContent}>
            <ProfileField label="닉네임" />
            <ProfileField label="나이" />
            <ProfileField label="소속" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습특성</div>
          <div className={rowContent}>
            <ProfileField label="흥미" />
            <ProfileField label="적성" />
            <ProfileField label="성격" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습시간</div>
          <div className={rowContent}>
            <ProfileField label="하루" />
            <ProfileField label="쉬는날" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습유형</div>
          <div className={rowContent}>
            <ProfileField label="자료" />
            <ProfileField label="수업" />
            <ProfileField label="학습" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습파트너</div>
          <div className={rowContent}>
            <ProfileField label="교사" />
            <ProfileField label="친구" />
            <ProfileField label="본인" />
          </div>
        </div>
      </div>
    </section>
  );
};
