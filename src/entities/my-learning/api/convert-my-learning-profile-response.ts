import type { MyLearningProfileDto } from "@entities/my-learning/api/my-learning-profile.dto";
import type { MyLearningProfile } from "@entities/my-learning/model/my-learning-profile.types";

const convertCommaTextToList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const convertMyLearningProfile = ({
  extraNotes,
  learningStyle,
  offDays,
  preferredClassStyle,
  preferredFriendStyle,
  preferredMaterialFormat,
  preferredStudyMethod,
  preferredStudyTime,
  preferredTeacherStyle,
  recommendedMethod,
  ...profile
}: MyLearningProfileDto): MyLearningProfile => ({
  usersId: profile.usersId,
  nickname: profile.nickname,
  schoolName: profile.schoolName,
  preferredStudyTime,
  offDayList: convertCommaTextToList(offDays),
  preferredMaterialFormatList: convertCommaTextToList(preferredMaterialFormat),
  preferredClassStyleList: convertCommaTextToList(preferredClassStyle),
  preferredStudyMethodList: convertCommaTextToList(preferredStudyMethod),
  preferredTeacherStyleList: convertCommaTextToList(preferredTeacherStyle),
  preferredFriendStyleList: convertCommaTextToList(preferredFriendStyle),
  extraNoteList: convertCommaTextToList(extraNotes),
  learningStyleList: convertCommaTextToList(learningStyle),
  recommendedMethodList: convertCommaTextToList(recommendedMethod),
});
