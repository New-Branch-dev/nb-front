import { MyProfile } from "@features/my-learning";

import { MyLearningEditPage } from "@views/my-learning";

const MyLearningProfileEditRoutePage = () => {
  return (
    <MyLearningEditPage stepKey="profile">
      <MyProfile />
    </MyLearningEditPage>
  );
};

export default MyLearningProfileEditRoutePage;
