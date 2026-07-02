import { SectionCardStack } from "@shared/ui";

import {
  INTEREST_ITEMS,
  LEARNING_TENDENCY_ITEMS,
  PERSONALITY_ITEMS,
  STRENGTH_ITEMS,
} from "@features/my-learning/learning-style/model/learning-style.consts";
import { SelectableChipSection } from "@features/selectable-chip-section";

type LearningPatternViewProps = {
  interests: string[];
  strengths: string[];
  personality: string[];
  learningTendencies: string[];
  onInterestsChange: (items: string[]) => void;
  onStrengthsChange: (items: string[]) => void;
  onPersonalityChange: (items: string[]) => void;
  onLearningTendenciesChange: (items: string[]) => void;
};

export const LearningStyleView = ({
  interests,
  strengths,
  personality,
  learningTendencies,
  onInterestsChange,
  onStrengthsChange,
  onPersonalityChange,
  onLearningTendenciesChange,
}: LearningPatternViewProps) => {
  return (
    <SectionCardStack>
      <SelectableChipSection
        title="흥미"
        description="(복수 선택 가능)"
        items={INTEREST_ITEMS}
        selectedItems={interests}
        onSelectedItems={onInterestsChange}
        directInputName="my-learning-interest-direct"
        directInputPlaceholder="흥미를 입력해 주세요"
      />

      <SelectableChipSection
        title="적성"
        description="(복수 선택 가능)"
        items={STRENGTH_ITEMS}
        selectedItems={strengths}
        onSelectedItems={onStrengthsChange}
        directInputName="my-learning-strength-direct"
        directInputPlaceholder="적성을 입력해 주세요"
      />

      <SelectableChipSection
        title="성격"
        description="(복수 선택 가능)"
        items={PERSONALITY_ITEMS}
        selectedItems={personality}
        onSelectedItems={onPersonalityChange}
        directInputName="my-learning-personality-direct"
        directInputPlaceholder="성격을 입력해 주세요"
      />

      <SelectableChipSection
        title="학습성향"
        description="(복수 선택 가능)"
        items={LEARNING_TENDENCY_ITEMS}
        selectedItems={learningTendencies}
        onSelectedItems={onLearningTendenciesChange}
        directInputName="my-learning-learning-tendency-direct"
        directInputPlaceholder="학습성향을 입력해 주세요"
      />
    </SectionCardStack>
  );
};
