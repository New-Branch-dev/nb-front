import { PreferredLearningType } from "@features/my-learning";

import { MyLearningEditPage } from "@views/my-learning";

const MyLearningPreferredTypeEditRoutePage = () => {
  return (
    <MyLearningEditPage stepKey="preferredLearningType">
      <PreferredLearningType />
    </MyLearningEditPage>
  );
};

export default MyLearningPreferredTypeEditRoutePage;
