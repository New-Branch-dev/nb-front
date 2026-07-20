import { chip, fieldLabel, fieldRow, fieldStack } from "@entities/my-learning/ui/profile-field/profile-field.css";

type ProfileFieldProps = {
  label: string;
  values: string[];
};

const convertDisplayValues = (values: string[]) => {
  const filteredValues = values.filter((value) => value.trim().length > 0);

  return filteredValues.length > 0 ? filteredValues : ["-"];
};

export const ProfileField = ({ label, values }: ProfileFieldProps) => {
  return (
    <div className={fieldRow}>
      <span className={fieldLabel}>{label}</span>
      <div className={fieldStack}>
        {convertDisplayValues(values).map((value) => (
          <span key={`${label}-${value}`} className={chip}>
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};
