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

const ProfileField = ({
  label,
  value,
}: {
  label: string;
  value: string;
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
            <ProfileField label="닉네임" value="뉴브랜치" />
            <ProfileField label="나이" value="2015년생(만 11세)" />
            <ProfileField label="소속" value="서울초등학교" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습특성</div>
          <div className={rowContent}>
            <ProfileField label="흥미" value="국어·영어" />
            <ProfileField label="적성" value="언어" />
            <ProfileField label="성격" value="꼼꼼함·계획적" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습시간</div>
          <div className={rowContent}>
            <ProfileField label="하루" value="16:00 - 20:00" />
            <ProfileField label="쉬는날" value="총 21일" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습유형</div>
          <div className={rowContent}>
            <ProfileField label="자료" value="텍스트" />
            <ProfileField label="수업" value="강의" />
            <ProfileField label="학습" value="문제풀이" />
          </div>
        </div>

        <div className={profileRow}>
          <div className={rowLabel}>학습파트너</div>
          <div className={rowContent}>
            <ProfileField label="교사" value="코칭" />
            <ProfileField label="친구" value="리더" />
            <ProfileField label="본인" value="협동" />
          </div>
        </div>
      </div>
    </section>
  );
};
