import {
  COMMON_CODE,
  type CommonCodeGroupId,
  convertCommonCodeValueListToLabelList,
} from "@shared/config";

import type { MyLearningProfileDto } from "@entities/my-learning/api/my-learning-profile.dto";
import type { MyLearningProfile } from "@entities/my-learning/model/my-learning-profile.types";

const convertCommaTextToList = (value: string) =>
  (value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const convertCodeGroupValueList = (
  groupId: CommonCodeGroupId,
  valueList: string[],
) => {
  const groupValueSet = new Set(
    COMMON_CODE[groupId].flatMap(({ code, label }) => [code, label]),
  );

  return convertCommonCodeValueListToLabelList(
    groupId,
    valueList.filter((value) => groupValueSet.has(value)),
  );
};

export const convertMyLearningProfile = ({
  extraNotes,
  preferredClassStyle,
  preferredFriendStyle,
  preferredMaterialFormat,
  preferredStudyMethod,
  preferredTeacherStyle,
  ...profile
}: MyLearningProfileDto): MyLearningProfile => {
  const extraNoteList = convertCommaTextToList(extraNotes);

  return {
    usersId: profile.usersId,
    nickname: profile.nickname,
    schoolName: profile.schoolName,
    interestList: convertCodeGroupValueList("JOY_CD", extraNoteList),
    strengthList: convertCodeGroupValueList("APTITUDE_CD", extraNoteList),
    personalityList: convertCodeGroupValueList("PERSONALITY_CD", extraNoteList),
    learningTendencyList: convertCodeGroupValueList(
      "LEARNING_TENDENCY_CD",
      extraNoteList,
    ),
    preferredMaterialFormatList: convertCommonCodeValueListToLabelList(
      "MATERIAL_TYPE_CD",
      convertCommaTextToList(preferredMaterialFormat),
    ),
    preferredClassStyleList: convertCommonCodeValueListToLabelList(
      "TEACHING_METHOD_CD",
      convertCommaTextToList(preferredClassStyle),
    ),
    preferredStudyMethodList: convertCommonCodeValueListToLabelList(
      "LEARNING_STRATEGY_CD",
      convertCommaTextToList(preferredStudyMethod),
    ),
    preferredTeacherStyleList: convertCommonCodeValueListToLabelList(
      "TEACHER_STYLE_CD",
      convertCommaTextToList(preferredTeacherStyle),
    ),
    preferredFriendStyleList: convertCommonCodeValueListToLabelList(
      "TEAM_MEMBER_STYLE_CD",
      convertCommaTextToList(preferredFriendStyle),
    ),
  };
};
