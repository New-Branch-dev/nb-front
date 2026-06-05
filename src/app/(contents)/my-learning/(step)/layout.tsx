import { MyLearningPage } from "@views/my-learning";

const MyLearningRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return <MyLearningPage>{children}</MyLearningPage>;
};

export default MyLearningRouteLayout;
