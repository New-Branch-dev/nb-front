import { useEffect } from "react";

import { Input } from "@shared/ui";

import { fieldGroup } from "./my-profile/MyProfile.css";

type StepPlaceholderContentProps = {
  step: number;
  onValidityChange: (isValid: boolean) => void;
};

export const StepPlaceholderContent = ({
  step,
  onValidityChange,
}: StepPlaceholderContentProps) => {
  useEffect(() => {
    onValidityChange(true);
  }, [onValidityChange]);

  return (
    <article aria-label={`${step}단계 콘텐츠`}>
      <div className={fieldGroup}>
        <Input
          name={`step-${step}`}
          placeholder={`${step}단계 콘텐츠 준비중`}
          value=""
          readOnly
          aria-label={`${step}단계 임시 콘텐츠`}
        />
      </div>
    </article>
  );
};
