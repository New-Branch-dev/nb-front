import type { SelectorOption } from "@shared/ui";
import { Selector } from "@shared/ui/selector/Selector";

import { countBox, countSelector, countSuffix } from "./settingsPanel.css";

type ReviewCountFieldProps = {
  name: string;
  "aria-label": string;
  value: string;
  onChange: (value: string) => void;
  options: readonly SelectorOption[];
};

export const ReviewCountField = ({
  name,
  "aria-label": ariaLabel,
  value,
  onChange,
  options,
}: ReviewCountFieldProps) => {
  return (
    <div className={countBox}>
      <Selector
        className={countSelector}
        variant="compact"
        name={name}
        aria-label={ariaLabel}
        options={options}
        value={value}
        placeholder="-"
        onChange={onChange}
      />
      <span className={countSuffix}>회독</span>
    </div>
  );
};
