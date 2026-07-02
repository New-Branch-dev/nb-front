import { LearningStyle } from "@features/my-learning";

import { MyLearningEditPage } from "@views/my-learning";

const MyLearningStyleEditRoutePage = () => {
  return (
    <MyLearningEditPage stepKey="learningStyle">
      <LearningStyle />
    </MyLearningEditPage>
  );
};

export default MyLearningStyleEditRoutePage;
