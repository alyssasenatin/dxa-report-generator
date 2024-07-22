'use client';

import {
  BmiClassification,
  LeftRightSite,
  MenopausalStatus,
  Sex,
} from './enums';
import {
  ForearmTestResult,
  LeftTestResult,
  LumbarTestResult,
  RightTestResult,
  TestResult,
} from './types';

const getBmdResult = (lowestTScore: number) => {
  if (lowestTScore <= -2.5) {
    return 'osteoporosis';
  }

  if (lowestTScore >= -1.0) {
    return 'normal BMD';
  }

  return 'osteopenia';
};

export const getAssessment = (
  age: number,
  {
    ageMatchedZScore: forearmZScore,
    youngAdultTScore: forearmTScore,
  }: ForearmTestResult,
  {
    ageMatchedZScore: leftZScore,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedZScore: lumbarZScore,
    youngAdultTScore: lumbarTScore,
  }: LumbarTestResult,
  menopausalStatus: MenopausalStatus,
  {
    ageMatchedZScore: rightZScore,
    youngAdultTScore: rightTScore,
  }: RightTestResult,
  sex: Sex,
  { ageMatchedZScore: totalBodyZScore }: TestResult
) => {
  const hasTScore = forearmTScore || leftTScore || lumbarTScore || rightTScore;
  const hasZScore =
    forearmZScore ||
    leftZScore ||
    lumbarZScore ||
    rightZScore ||
    totalBodyZScore;
  const validInput =
    sex === Sex.MALE
      ? age && hasTScore && hasZScore
      : hasTScore && hasZScore && menopausalStatus;

  if (validInput) {
    const manYoungerThan50 = sex === Sex.MALE && age < 50;
    const preMenopausalWoman =
      sex === Sex.FEMALE &&
      menopausalStatus === MenopausalStatus.PRE_MENOPAUSAL;

    if (manYoungerThan50 || preMenopausalWoman) {
      const lowestZScore = Math.min(
        forearmZScore,
        leftZScore,
        lumbarZScore,
        rightZScore,
        totalBodyZScore
      );

      return `\
In summary, your patient's BMD is \
${lowestZScore > -2.0 ? 'within the expected range for age' : 'below the expected range for age'} \
based on the ISCD guidelines for ${preMenopausalWoman ? 'pre-menopausal women' : 'men younger than 50 years old'}.\
`;
    }

    if (sex === Sex.FEMALE) {
      const lowestTScore = Math.min(
        forearmTScore,
        leftTScore,
        lumbarTScore,
        rightTScore
      );

      return `\
In summary, your patient has \
${getBmdResult(lowestTScore)} \
based on the WHO classification for \
${menopausalStatus === MenopausalStatus.PERI_MENOPAUSAL ? 'peri-menopausal women' : 'post-menopausal women'}.\
`;
    }

    const lowestTScore = Math.min(leftTScore, rightTScore, lumbarTScore);

    return `\
In summary, your patient has \
${getBmdResult(lowestTScore)} \
based on the WHO classification for men aged 50 and older.\
    `;
  }

  return '';
};

const getBmiClassification = (bmi: number) => {
  if (bmi < 18.5) {
    return BmiClassification.UNDERWEIGHT;
  }

  if (bmi >= 18.5 && bmi < 23.0) {
    return BmiClassification.NORMAL;
  }

  if (bmi >= 23.0 && bmi < 25.0) {
    return BmiClassification.OVERWEIGHT;
  }

  if (bmi >= 25.0 && bmi < 30.0) {
    return BmiClassification.OBESE_1;
  }

  if (bmi >= 30.0) {
    return BmiClassification.OBESE_2;
  }

  return BmiClassification.DEFAULT;
};

export const getBmi = (height: number, weight: number) => {
  if (height && weight) {
    const bmi = weight / (height / 100) ** 2;

    return { bmi, bmiClassification: getBmiClassification(bmi) };
  }

  return { bmi: 0, bmiClassification: BmiClassification.DEFAULT };
};

export const getInterpretationNoZScore = (
  {
    ageMatchedPercent: forearmZPercent,
    ageMatchedZScore: forearmZScore,
    bmd: forearmBmd,
    youngAdultPercent: forearmTPercent,
    youngAdultTScore: forearmTScore,
  }: ForearmTestResult,
  {
    ageMatchedPercent: leftZPercent,
    ageMatchedZScore: leftZScore,
    bmd: leftBmd,
    youngAdultPercent: leftTPercent,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedPercent: lumbarZPercent,
    ageMatchedZScore: lumbarZScore,
    bmd: lumbarBmd,
    lumbarSite,
    youngAdultPercent: lumbarTPercent,
    youngAdultTScore: lumbarTScore,
  }: LumbarTestResult,
  {
    ageMatchedPercent: rightZPercent,
    ageMatchedZScore: rightZScore,
    bmd: rightBmd,
    rightSite,
    youngAdultPercent: rightTPercent,
    youngAdultTScore: rightTScore,
  }: RightTestResult,
  {
    ageMatchedPercent: totalBodyZPercent,
    ageMatchedZScore: totalBodyZScore,
    bmd: totalBodyBmd,
    youngAdultPercent: totalBodyTPercent,
    youngAdultTScore: totalBodyTScore,
  }: TestResult
) => {
  const hasLumbarResults =
    lumbarBmd &&
    lumbarZPercent &&
    lumbarZScore &&
    lumbarTPercent &&
    lumbarZScore &&
    lumbarSite.length > 0;

  const hasLeftAndRightResults =
    leftBmd &&
    leftZPercent &&
    leftZScore &&
    leftTPercent &&
    leftZScore &&
    rightBmd &&
    rightZPercent &&
    rightZScore &&
    rightTPercent &&
    rightZScore;

  const hasForearmResults =
    forearmBmd &&
    forearmZPercent &&
    forearmZScore &&
    forearmTPercent &&
    forearmZScore;

  const hasTotalBodyResults =
    totalBodyBmd &&
    totalBodyZPercent &&
    totalBodyZScore &&
    totalBodyTPercent &&
    totalBodyZScore;

  return `${
    hasLumbarResults &&
    `The most representative BMD of the lumbar spine comes from \
${lumbarSite.length === 4 ? 'L1 - L4' : lumbarSite.map((site) => `L${site}`).join(', ')}\
. This total BMD value of ${lumbarBmd} g/cm2 \
(T-score: ${lumbarTScore}) \
indicates a ${100 - lumbarTPercent} % diminution from the mean peak BMD of a young adult aged 20 – 45 \
and ${100 - lumbarZPercent} % diminished when compared to adults of similar age, weight, and race (age-matched).
`
  }${
    hasLeftAndRightResults &&
    `
The right and left ${rightSite === LeftRightSite.FEMORAL_NECK ? 'femoral neck' : 'total hip'} \
BMDs of ${rightBmd} g/cm2 and ${leftBmd} g/cm2 (T-scores: ${rightTScore} right, ${leftTScore} left\
) respectively are \
${rightTPercent === 0 && leftTPercent === 0 ? 'not' : `${100 - rightTPercent} % and ${100 - leftTPercent} %`} \
diminished relative to the mean peak BMD of a young adult aged 20 – 45, and \
${rightZPercent === 0 && leftZPercent === 0 ? 'not' : `${100 - rightZPercent} % and ${100 - leftZPercent} %`} \
diminished when compared to adults of similar age, weight, and race (age-matched).
`
  }${
    hasTotalBodyResults
      ? `${
          hasForearmResults &&
          `
The nondominant forearm 33 % radius and total body BMDs of ${forearmBmd} g/cm2 and ${totalBodyBmd} g/cm2 \
(T-scores: ${forearmTScore}, ${totalBodyTScore}) \
respectively are ${100 - forearmTPercent} % and ${100 - totalBodyTPercent} % below the young adult mean BMD, \
and ${100 - forearmZPercent} % and ${100 - totalBodyZPercent} % diminished when compared to adults of similar age, weight, and race (age-matched).`
        }`
      : `${
          hasForearmResults &&
          `
The nondominant forearm 33 % radius BMD of ${forearmBmd} g/cm2 (T-score: ${forearmTScore}\
) is ${100 - forearmTPercent} % below the young adult mean BMD and \
${100 - forearmZPercent} % diminished when compared to adults of similar age, weight, and race (age-matched).`
        }`
  }`.trim();
};

export const getInterpretationWithZScore = (
  {
    ageMatchedPercent: forearmZPercent,
    ageMatchedZScore: forearmZScore,
    bmd: forearmBmd,
    youngAdultPercent: forearmTPercent,
    youngAdultTScore: forearmTScore,
  }: ForearmTestResult,
  {
    ageMatchedPercent: leftZPercent,
    ageMatchedZScore: leftZScore,
    bmd: leftBmd,
    youngAdultPercent: leftTPercent,
    youngAdultTScore: leftTScore,
  }: LeftTestResult,
  {
    ageMatchedPercent: lumbarZPercent,
    ageMatchedZScore: lumbarZScore,
    bmd: lumbarBmd,
    lumbarSite,
    youngAdultPercent: lumbarTPercent,
    youngAdultTScore: lumbarTScore,
  }: LumbarTestResult,
  {
    ageMatchedPercent: rightZPercent,
    ageMatchedZScore: rightZScore,
    bmd: rightBmd,
    rightSite,
    youngAdultPercent: rightTPercent,
    youngAdultTScore: rightTScore,
  }: RightTestResult,
  {
    ageMatchedPercent: totalBodyZPercent,
    ageMatchedZScore: totalBodyZScore,
    bmd: totalBodyBmd,
    youngAdultPercent: totalBodyTPercent,
    youngAdultTScore: totalBodyTScore,
  }: TestResult
) => {
  const hasLumbarResults =
    lumbarBmd &&
    lumbarZPercent &&
    lumbarZScore &&
    lumbarTPercent &&
    lumbarZScore &&
    lumbarSite.length > 0;

  const hasLeftAndRightResults =
    leftBmd &&
    leftZPercent &&
    leftZScore &&
    leftTPercent &&
    leftZScore &&
    rightBmd &&
    rightZPercent &&
    rightZScore &&
    rightTPercent &&
    rightZScore;

  const hasForearmResults =
    forearmBmd &&
    forearmZPercent &&
    forearmZScore &&
    forearmTPercent &&
    forearmZScore;

  const hasTotalBodyResults =
    totalBodyBmd &&
    totalBodyZPercent &&
    totalBodyZScore &&
    totalBodyTPercent &&
    totalBodyZScore;

  return `${
    hasLumbarResults &&
    `The most representative BMD of the lumbar spine comes from \
${lumbarSite.length === 4 ? 'L1 - L4' : lumbarSite.map((site) => `L${site}`).join(', ')}\
. This total BMD value of ${lumbarBmd} g/cm2 \
(T-score: ${lumbarTScore} and Z-score: ${lumbarZScore}) \
indicates a ${100 - lumbarTPercent} % diminution from the mean peak BMD of a young adult aged 20 – 45 \
and ${100 - lumbarZPercent} % diminished when compared to adults of similar age, weight, and race (age-matched).
`
  }${
    hasLeftAndRightResults &&
    `
The right and left ${rightSite === LeftRightSite.FEMORAL_NECK ? 'femoral neck' : 'total hip'} \
BMDs of ${rightBmd} g/cm2 and ${leftBmd} g/cm2 (T-scores: ${rightTScore} right, ${leftTScore} left \
and Z-scores: ${rightZScore} right, ${leftZScore} left) respectively are \
${rightTPercent === 0 && leftTPercent === 0 ? 'not' : `${100 - rightTPercent} % and ${100 - leftTPercent} %`} \
diminished relative to the mean peak BMD of a young adult aged 20 – 45, and \
${rightZPercent === 0 && leftZPercent === 0 ? 'not' : `${100 - rightZPercent} % and ${100 - leftZPercent} %`} \
diminished when compared to adults of similar age, weight, and race (age-matched).
`
  }${
    hasTotalBodyResults
      ? `${
          hasForearmResults &&
          `
The nondominant forearm 33 % radius and total body BMDs of ${forearmBmd} g/cm2 and ${totalBodyBmd} g/cm2 \
(T-scores: ${forearmTScore}, ${totalBodyTScore} and Z-scores: ${forearmZScore}, ${totalBodyZScore}) \
respectively are ${100 - forearmTPercent} % and ${100 - totalBodyTPercent} % below the young adult mean BMD, \
and ${100 - forearmZPercent} % and ${100 - totalBodyZPercent} % diminished when compared to adults of similar age, weight, and race (age-matched).`
        }`
      : `${
          hasForearmResults &&
          `
The nondominant forearm 33 % radius BMD of ${forearmBmd} g/cm2 (T-score: ${forearmTScore} \
and Z-score: ${forearmZScore}) is ${100 - forearmTPercent} % below the young adult mean BMD and \
${100 - forearmZPercent} % diminished when compared to adults of similar age, weight, and race (age-matched).`
        }`
  }`.trim();
};

export const getInterpretation = (
  forearm: ForearmTestResult,
  left: LeftTestResult,
  lumbar: LumbarTestResult,
  right: RightTestResult,
  totalBody: TestResult,
  showZScores: boolean
) => {
  const noZScore = getInterpretationNoZScore(
    forearm,
    left,
    lumbar,
    right,
    totalBody
  );

  const withZScore = getInterpretationWithZScore(
    forearm,
    left,
    lumbar,
    right,
    totalBody
  );

  return showZScores ? withZScore : noZScore;
};
