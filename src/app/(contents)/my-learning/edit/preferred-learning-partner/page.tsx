import { PreferredLearningPartner } from "@features/my-learning";

import { MyLearningEditPage } from "@views/my-learning";

const MyLearningPreferredPartnerEditRoutePage = () => {
  return (
    <MyLearningEditPage stepKey="preferredLearningPartner">
      <PreferredLearningPartner />
    </MyLearningEditPage>
  );
};

export default MyLearningPreferredPartnerEditRoutePage;
