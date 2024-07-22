'use client';

/* eslint-disable react/jsx-props-no-spreading */
import { Button, Card, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  AgeInput,
  AssessmentInput,
  BmiInput,
  ClassificationInput,
  DateOfPreviousStudyInput,
  FollowUpStudyInput,
  ForearmInput,
  HeightInput,
  HipFractureRiskInput,
  InterpretationInput,
  LeftSideInput,
  LumbarSiteInput,
  MajorBoneFractureRiskInput,
  MenopausalStatusInput,
  RaceInput,
  RecommendationInput,
  ReportTypeInput,
  ResultInputs,
  RightSideInput,
  RiskFactorsInput,
  SexInput,
  ShowZScoresInput,
  TotalBodyMassInput,
  WeightInput,
  WholeBodyCompositionInput,
} from './inputs';
import styles from './form.module.css';
import {
  ForearmSite,
  FormField,
  LeftRightSite,
  ReportType,
  ResultType,
  Sex,
} from './enums';
import {
  getAssessment,
  getBmi,
  getForearm,
  getInterpretation,
  getInterpretationNoZScore,
  getInterpretationWithZScore,
} from './helpers';
import {
  DxaReportFormInputs,
  ForearmTestResult,
  LeftTestResult,
  LumbarTestResult,
  RightTestResult,
  TestResult,
} from './types';

const { form, section, column } = styles;

const DxaReportForm = () => {
  // TODO: Fix type of form, remove age, assessment, BMI, BMI classification, tzscores, percent,
  // BMD values, height, interpretation, menopausal status, show zscores, weight default value
  const methods = useForm<DxaReportFormInputs>({
    defaultValues: {
      // [FormField.AGE]: 0,
      // [FormField.ASSESSMENT]: '',
      // [FormField.BMI]: 0,
      // [FormField.BMI_CLASSIFICATION]: '',
      // [FormField.HEIGHT]: 0,
      // [FormField.INTERPRETATION]: '',
      // [ResultType.FOREARM]: {
      //   [FormField.AGE_MATCHED_PERCENT]: 0,
      //   [FormField.AGE_MATCHED_Z_SCORE]: 0,
      //   [FormField.BMD]: 0,
      //   [FormField.FOREARM_SITE]: ForearmSite.LEFT,
      //   [FormField.YOUNG_ADULT_PERCENT]: 0,
      //   [FormField.YOUNG_ADULT_T_SCORE]: 0,
      // },
      [ResultType.FOREARM]: {
        [FormField.FOREARM_SITE]: ForearmSite.LEFT,
      } as ForearmTestResult,
      [ResultType.LEFT]: {
        [FormField.LEFT_SITE]: LeftRightSite.FEMORAL_NECK,
      } as LeftTestResult,
      // [ResultType.LEFT]: {
      //   [FormField.AGE_MATCHED_PERCENT]: 0,
      //   [FormField.AGE_MATCHED_Z_SCORE]: 0,
      //   [FormField.BMD]: 0,
      //   [FormField.LEFT_SITE]: LeftRightSite.FEMORAL_NECK,
      //   [FormField.YOUNG_ADULT_PERCENT]: 0,
      //   [FormField.YOUNG_ADULT_T_SCORE]: 0,
      // },
      [ResultType.LUMBAR]: {
        [FormField.LUMBAR_SITE]: ['1', '2', '3', '4'],
      } as LumbarTestResult,
      // [ResultType.LUMBAR]: {
      //   [FormField.AGE_MATCHED_PERCENT]: 0,
      //   [FormField.AGE_MATCHED_Z_SCORE]: 0,
      //   [FormField.BMD]: 0,
      //   [FormField.LUMBAR_SITE]: ['1', '2', '3', '4'],
      //   [FormField.YOUNG_ADULT_PERCENT]: 0,
      //   [FormField.YOUNG_ADULT_T_SCORE]: 0,
      // },
      // [FormField.MENOPAUSAL_STATUS]: '',
      [FormField.REPORT_TYPE]: ReportType.BASELINE,
      [ResultType.RIGHT]: {
        [FormField.RIGHT_SITE]: LeftRightSite.FEMORAL_NECK,
      } as RightTestResult,
      // [ResultType.RIGHT]: {
      //   [FormField.AGE_MATCHED_PERCENT]: 0,
      //   [FormField.AGE_MATCHED_Z_SCORE]: 0,
      //   [FormField.BMD]: 0,
      //   [FormField.RIGHT_SITE]: LeftRightSite.FEMORAL_NECK,
      //   [FormField.YOUNG_ADULT_PERCENT]: 0,
      //   [FormField.YOUNG_ADULT_T_SCORE]: 0,
      // },
      [FormField.SEX]: Sex.MALE,
      [FormField.SHOW_Z_SCORES]: false,
      [ResultType.TOTAL_BODY]: {} as TestResult,
      // [ResultType.TOTAL_BODY]: {
      //   [FormField.AGE_MATCHED_PERCENT]: 0,
      //   [FormField.AGE_MATCHED_Z_SCORE]: 0,
      //   [FormField.BMD]: 0,
      //   [FormField.YOUNG_ADULT_PERCENT]: 0,
      //   [FormField.YOUNG_ADULT_T_SCORE]: 0,
      // },
      // [FormField.WEIGHT]: 0,
    },
  });

  const [interpretation, setInterpretation] = useState('');

  const { handleSubmit, setValue, watch } = methods;

  // const [
  //   age,
  //   forearmBmd,
  //   forearmTPercent,
  //   forearmTScore,
  //   forearmZPercent,
  //   forearmZScore,
  //   height,
  //   leftBmd,
  //   leftTPercent,
  //   leftTScore,
  //   leftZPercent,
  //   leftZScore,
  //   lumbarBmd,
  //   lumbarTPercent,
  //   lumbarTScore,
  //   lumbarZPercent,
  //   lumbarZScore,
  //   menopausalStatus,
  //   rightBmd,
  //   rightTPercent,
  //   rightTScore,
  //   rightZPercent,
  //   rightZScore,
  //   reportType,
  //   sex,
  //   showZScores,
  //   totalBodyBmd,
  //   totalBodyTPercent,
  //   totalBodyTScore,
  //   totalBodyZPercent,
  //   totalBodyZScore,
  //   weight,
  // ] = watch([
  //   FormField.AGE,
  //   `${ResultType.FOREARM}.${FormField.BMD}`,
  //   `${ResultType.FOREARM}.${FormField.YOUNG_ADULT_T_SCORE}`,
  //   `${ResultType.FOREARM}.${FormField.AGE_MATCHED_Z_SCORE}`,
  //   FormField.HEIGHT,
  //   `${ResultType.LEFT}.${FormField.BMD}`,
  //   `${ResultType.LEFT}.${FormField.YOUNG_ADULT_T_SCORE}`,
  //   `${ResultType.LEFT}.${FormField.AGE_MATCHED_Z_SCORE}`,
  //   `${ResultType.LUMBAR}.${FormField.BMD}`,
  //   `${ResultType.LUMBAR}.${FormField.YOUNG_ADULT_T_SCORE}`,
  //   `${ResultType.LUMBAR}.${FormField.AGE_MATCHED_Z_SCORE}`,
  //   FormField.MENOPAUSAL_STATUS,
  //   `${ResultType.RIGHT}.${FormField.BMD}`,
  //   `${ResultType.RIGHT}.${FormField.YOUNG_ADULT_T_SCORE}`,
  //   `${ResultType.RIGHT}.${FormField.AGE_MATCHED_Z_SCORE}`,
  //   FormField.REPORT_TYPE,
  //   FormField.SEX,
  //   FormField.SHOW_Z_SCORES,
  //   `${ResultType.TOTAL_BODY}.${FormField.BMD}`,
  //   `${ResultType.TOTAL_BODY}.${FormField.AGE_MATCHED_Z_SCORE}`,
  //   FormField.WEIGHT,
  // ]);

  const {
    age,
    forearm,
    height,
    left,
    lumbar,
    menopausalStatus,
    right,
    reportType,
    sex,
    showZScores,
    totalBody,
    weight,
  } = watch();

  const {
    ageMatchedPercent: forearmZPercent,
    ageMatchedZScore: forearmZScore,
    bmd: forearmBmd,
    forearmSite,
    youngAdultPercent: forearmTPercent,
    youngAdultTScore: forearmTScore,
  } = forearm;

  const {
    ageMatchedPercent: leftZPercent,
    ageMatchedZScore: leftZScore,
    bmd: leftBmd,
    leftSite,
    youngAdultPercent: leftTPercent,
    youngAdultTScore: leftTScore,
  } = left;

  const {
    ageMatchedPercent: lumbarZPercent,
    ageMatchedZScore: lumbarZScore,
    bmd: lumbarBmd,
    lumbarSite,
    youngAdultPercent: lumbarTPercent,
    youngAdultTScore: lumbarTScore,
  } = lumbar;

  const {
    ageMatchedPercent: rightZPercent,
    ageMatchedZScore: rightZScore,
    bmd: rightBmd,
    rightSite,
    youngAdultPercent: rightTPercent,
    youngAdultTScore: rightTScore,
  } = right;

  const {
    ageMatchedPercent: totalBodyZPercent,
    ageMatchedZScore: totalBodyZScore,
    bmd: totalBodyBmd,
    youngAdultPercent: totalBodyTPercent,
    youngAdultTScore: totalBodyTScore,
  } = totalBody;

  // Set BMI and BMI Classification
  useEffect(() => {
    const { bmi, bmiClassification } = getBmi(height, weight);

    setValue(FormField.BMI, bmi);
    setValue(FormField.BMI_CLASSIFICATION, bmiClassification);
  }, [height, weight]);

  // Set Interpretation
  // useEffect(() => {
  //   setValue(
  //     FormField.INTERPRETATION,
  //     getInterpretation(forearm, left, lumbar, right, totalBody, showZScores)
  //   );
  // }, [
  //   forearmBmd,
  //   forearmSite,
  //   forearmTPercent,
  //   forearmTScore,
  //   forearmZPercent,
  //   forearmZScore,
  //   leftBmd,
  //   leftSite,
  //   leftTPercent,
  //   leftTScore,
  //   leftZPercent,
  //   leftZScore,
  //   lumbarBmd,
  //   lumbarSite,
  //   lumbarTPercent,
  //   lumbarTScore,
  //   lumbarZPercent,
  //   lumbarZScore,
  //   rightBmd,
  //   rightSite,
  //   rightTPercent,
  //   rightTScore,
  //   rightZPercent,
  //   rightZScore,
  //   showZScores,
  //   totalBodyBmd,
  //   totalBodyTPercent,
  //   totalBodyTScore,
  //   totalBodyZPercent,
  //   totalBodyZScore,
  // ]);

  // Set Assessment
  // useEffect(() => {
  //   setValue(
  //     FormField.ASSESSMENT,
  //     getAssessment(
  //       age,
  //       forearm,
  //       left,
  //       lumbar,
  //       menopausalStatus,
  //       right,
  //       sex,
  //       totalBody
  //     )
  //   );
  // }, [
  //   age,
  //   forearmTScore,
  //   forearmZScore,
  //   leftTScore,
  //   leftZScore,
  //   lumbarTScore,
  //   lumbarZScore,
  //   menopausalStatus,
  //   rightTScore,
  //   rightZScore,
  //   sex,
  //   totalBodyZScore,
  // ]);

  useEffect(() => {
    console.log(
      'alyssa',
      getInterpretation(forearm, left, lumbar, right, totalBody, showZScores)
    );
    setInterpretation((prev) =>
      getInterpretation(forearm, left, lumbar, right, totalBody, showZScores)
    );
    console.log('alyssa', showZScores);
  }, [showZScores]);

  //

  useEffect(() => {
    console.log('alyssa', interpretation);
  }, [interpretation]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <Grid container className={form}>
      <Typography variant="displaySm">DXA Report Contents</Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            alignItems="center"
            gap="12px"
            paddingBottom="16px"
            width="100%"
          >
            <Grid minWidth="300px">
              <ReportTypeInput />
            </Grid>
            {reportType === ReportType.FOLLOW_UP && (
              <Grid flexGrow={1} minWidth="275px">
                <DateOfPreviousStudyInput />
              </Grid>
            )}
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Patient Information</Typography>
            <Grid container className={column}>
              <Grid minWidth="300px">
                <SexInput />
              </Grid>
              {sex === Sex.FEMALE && (
                <Grid flexGrow={1} minWidth="275px">
                  <MenopausalStatusInput />
                </Grid>
              )}
            </Grid>
            <Grid container className={column}>
              <Grid width="calc(50% - 6px)">
                <RaceInput />
              </Grid>
              <Grid width="calc(50% - 6px)">
                <AgeInput />
              </Grid>
            </Grid>
            <Grid container className={column}>
              <Grid width="calc(50% - 6px)">
                <HeightInput />
              </Grid>
              <Grid width="calc(50% - 6px)">
                <WeightInput />
              </Grid>
            </Grid>
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Test Results</Typography>
            <Grid container gap="12px">
              <Grid container gap="12px" paddingBottom="16px">
                <LumbarSiteInput />
                <ResultInputs resultType={ResultType.LUMBAR} />
              </Grid>
              <Grid container gap="12px" paddingBottom="16px">
                <RightSideInput />
                <ResultInputs resultType={ResultType.RIGHT} />
              </Grid>
              <Grid container gap="12px" paddingBottom="16px">
                <LeftSideInput />
                <ResultInputs resultType={ResultType.LEFT} />
              </Grid>
              <Grid container gap="12px" paddingBottom="16px">
                <ForearmInput />
                <ResultInputs resultType={ResultType.FOREARM} />
              </Grid>
              <Grid container gap="12px" paddingBottom="16px">
                <Typography variant="titleMd">Total body</Typography>
                <ResultInputs resultType={ResultType.TOTAL_BODY} />
              </Grid>
            </Grid>
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Total Body Composition</Typography>
            <Grid container className={column}>
              <Grid width="calc(50% - 6px)">
                <BmiInput />
              </Grid>
              <Grid width="calc(50% - 6px)">
                <ClassificationInput />
              </Grid>
              <TotalBodyMassInput />
              <WholeBodyCompositionInput />
            </Grid>
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Findings</Typography>
            <ShowZScoresInput />
            <div
              style={{
                textWrap: 'wrap',
              }}
            >
              {getInterpretation(
                forearm,
                left,
                lumbar,
                right,
                totalBody,
                showZScores
              )}
            </div>
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Assessment</Typography>
            <AssessmentInput />
            <HipFractureRiskInput />
            <MajorBoneFractureRiskInput />
            <RiskFactorsInput />
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Recommendation</Typography>
            <RecommendationInput />
          </Grid>

          <Grid container className={section} flexDirection="column">
            <Typography variant="headlineSm">Follow-up Study</Typography>
            <FollowUpStudyInput />
          </Grid>

          <Grid container flexDirection="row-reverse" gap="12px" width="100%">
            <Button variant="contained" color="primary" type="submit">
              Generate
            </Button>
            <Button variant="contained" color="secondary">
              Reset
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </Grid>
  );
};

export default DxaReportForm;
