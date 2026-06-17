import { PreferredLearningTime } from "@features/my-learning";

import { MyLearningEditPage } from "@views/my-learning";

const MyLearningPreferredTimeEditRoutePage = () => {
  return (
    <MyLearningEditPage stepKey="preferredLearningTime">
      <PreferredLearningTime />
    </MyLearningEditPage>
  );
};

export default MyLearningPreferredTimeEditRoutePage;
