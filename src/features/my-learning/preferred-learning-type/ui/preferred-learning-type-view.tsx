import { SectionCardStack } from "@shared/ui";

import {
  CLASS_STYLE_ITEMS,
  LEARNING_METHOD_ITEMS,
  MATERIAL_FORMAT_ITEMS,
} from "@features/my-learning/preferred-learning-type/model/learning-type.consts";
import { SelectableChipSection } from "@features/selectable-chip-section";

type LearningTypeViewProps = {
  materialFormats: string[];
  classStyles: string[];
  learningMethods: string[];
  onMaterialFormatsChange: (items: string[]) => void;
  onClassStylesChange: (items: string[]) => void;
  onLearningMethodsChange: (items: string[]) => void;
};

export const LearningTypeView = ({
  materialFormats,
  classStyles,
  learningMethods,
  onMaterialFormatsChange,
  onClassStylesChange,
  onLearningMethodsChange,
}: LearningTypeViewProps) => {
  return (
    <SectionCardStack>
      <SelectableChipSection
        title="자료형식"
        description="배울 때 선호하는 자료 형태를 선택해주세요. (복수선택가능)"
        items={MATERIAL_FORMAT_ITEMS}
        selectedItems={materialFormats}
        onSelectedItems={onMaterialFormatsChange}
        directInputName="my-learning-material-format-direct"
        directInputPlaceholder="자료 형식을 입력해 주세요"
      />

      <SelectableChipSection
        title="수업방식"
        description="배울 때 선호하는 수업 방식을 선택해주세요. (복수선택가능)"
        items={CLASS_STYLE_ITEMS}
        selectedItems={classStyles}
        onSelectedItems={onClassStylesChange}
        directInputName="my-learning-class-style-direct"
        directInputPlaceholder="수업 방식을 입력해 주세요"
      />

      <SelectableChipSection
        title="학습방법"
        description="배울 때 선호하는 학습 방법을 선택해주세요. (복수선택)"
        items={LEARNING_METHOD_ITEMS}
        selectedItems={learningMethods}
        onSelectedItems={onLearningMethodsChange}
        directInputName="my-learning-learning-method-direct"
        directInputPlaceholder="학습 방법을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
