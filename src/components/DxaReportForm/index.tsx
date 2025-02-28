import { useEffect } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

import {
  DxaReportFormInputs,
  ForearmSite,
  FormField,
  FormLabel,
  LeftRightSite,
  LumbarSite,
  MenopausalStatus,
  Race,
  ReportType,
  ResultType,
  Sex,
  ShowZScores,
  UnitType,
} from '../../types';

import Checkbox from '../Checkbox';
import Input from '../Input';
import Radio from '../Radio';
import Select from '../Select';

import {
  getAssessment,
  getBmi,
  getFollowUpStudy,
  getInterpretation,
  getRecommendation,
} from './helpers';
import Textarea from '../Textarea';

const DxaReportForm = ({
  methods,
}: {
  methods: UseFormReturn<DxaReportFormInputs>;
}) => {
  const { watch, setValue } = methods;

  const {
    age,
    forearm,
    height,
    hipFractureRisk,
    left,
    lumbar,
    majorBoneFractureRisk,
    menopausalStatus,
    reportType,
    right,
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
  }, [height, weight, setValue]);

  // Set Interpretation
  useEffect(() => {
    setValue(
      FormField.INTERPRETATION,
      getInterpretation(forearm, left, lumbar, right, totalBody, showZScores)
    );
  }, [
    forearm,
    forearmZPercent,
    forearmZScore,
    forearmBmd,
    forearmTPercent,
    forearmTScore,
    left,
    leftZPercent,
    leftZScore,
    leftBmd,
    leftTPercent,
    leftTScore,
    lumbar,
    lumbarZPercent,
    lumbarZScore,
    lumbarBmd,
    lumbarSite,
    lumbarTPercent,
    lumbarTScore,
    right,
    rightZPercent,
    rightZScore,
    rightBmd,
    rightSite,
    rightTPercent,
    rightTScore,
    totalBody,
    totalBodyZPercent,
    totalBodyZScore,
    totalBodyBmd,
    totalBodyTPercent,
    totalBodyTScore,
    showZScores,
    setValue,
  ]);

  // Set Assessment
  useEffect(() => {
    setValue(
      FormField.ASSESSMENT,
      getAssessment(
        age,
        forearm,
        left,
        lumbar,
        menopausalStatus,
        right,
        sex,
        totalBody
      )
    );
  }, [
    age,
    forearm,
    forearmTScore,
    forearmZScore,
    left,
    leftTScore,
    leftZScore,
    lumbar,
    lumbarTScore,
    lumbarZScore,
    menopausalStatus,
    right,
    rightTScore,
    rightZScore,
    sex,
    totalBody,
    totalBodyZScore,
    setValue,
  ]);

  // Set Recommendation
  useEffect(() => {
    setValue(
      FormField.RECOMMENDATION,
      getRecommendation(
        forearm,
        left,
        lumbar,
        right,
        totalBody,
        hipFractureRisk,
        majorBoneFractureRisk
      )
    );
  }, [
    forearm,
    forearmTScore,
    forearmZScore,
    hipFractureRisk,
    left,
    leftTScore,
    leftZScore,
    lumbar,
    lumbarTScore,
    lumbarZScore,
    majorBoneFractureRisk,
    right,
    rightTScore,
    rightZScore,
    totalBody,
    totalBodyTScore,
    totalBodyZScore,
    setValue,
  ]);

  // Set Follow-Up Study
  useEffect(() => {
    setValue(
      FormField.FOLLOW_UP_STUDY,
      getFollowUpStudy(
        forearm,
        left,
        lumbar,
        right,
        totalBody,
        hipFractureRisk,
        majorBoneFractureRisk
      )
    );
  }, [
    forearm,
    forearmTScore,
    hipFractureRisk,
    left,
    leftTScore,
    lumbar,
    lumbarTScore,
    majorBoneFractureRisk,
    right,
    rightTScore,
    totalBody,
    totalBodyTScore,
    setValue,
  ]);

  return (
    <FormProvider {...methods}>
      <div className="row mb-5">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.REPORT_TYPE}
            name={FormField.REPORT_TYPE}
            options={Object.values(ReportType).map((value) => ({
              label: value,
              value,
            }))}
            inline
          />
        </div>
        <div
          className={`col${reportType === ReportType.FOLLOW_UP ? ' d-block' : ' d-none'}`}
        >
          <Input
            label={FormLabel.DATE_PREVIOUS_STUDY}
            name={FormField.DATE_PREVIOUS_STUDY}
            type="date"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Patient Information</h3>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.SEX}
            name={FormField.SEX}
            options={Object.values(Sex).map((value) => ({
              label: value,
              value,
            }))}
            inline
          />
        </div>
        <div className={`col${sex === Sex.FEMALE ? ' d-block' : ' d-none'}`}>
          <Select
            label={FormLabel.MENOPAUSAL_STATUS}
            name={FormField.MENOPAUSAL_STATUS}
            options={Object.values(MenopausalStatus).map((value) => ({
              label: value,
              value,
            }))}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.RACE}
            name={FormField.RACE}
            options={Object.values(Race).map((value) => ({
              label: value,
              value,
            }))}
            inline
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Input label={FormLabel.AGE} name={FormField.AGE} type="number" />
        </div>
        <div className="col">
          <Input
            label={FormLabel.HEIGHT}
            name={FormField.HEIGHT}
            type="number"
            unit={UnitType.HEIGHT}
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.WEIGHT}
            name={FormField.WEIGHT}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Test Results</h3>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Checkbox
            label={FormLabel.LUMBAR_SITE}
            name={`${ResultType.LUMBAR}.${FormField.LUMBAR_SITE}`}
            options={Object.values(LumbarSite).map((value) => ({
              label: value,
              value,
            }))}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.BMD}
            name={`${ResultType.LUMBAR}.${FormField.BMD}`}
            type="number"
            unit={UnitType.BMD}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Young Adult</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.T_SCORE}
            name={`${ResultType.LUMBAR}.${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LUMBAR}.${FormField.YOUNG_ADULT_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Age-matched</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.Z_SCORE}
            name={`${ResultType.LUMBAR}.${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LUMBAR}.${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.RIGHT_SITE}
            name={`${ResultType.RIGHT}.${FormField.RIGHT_SITE}`}
            options={Object.values(LeftRightSite).map((value) => ({
              label: value,
              value,
            }))}
            inline
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.BMD}
            name={`${ResultType.RIGHT}.${FormField.BMD}`}
            type="number"
            unit={UnitType.BMD}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Young Adult</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.T_SCORE}
            name={`${ResultType.RIGHT}.${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.RIGHT}.${FormField.YOUNG_ADULT_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Age-matched</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.Z_SCORE}
            name={`${ResultType.RIGHT}.${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.RIGHT}.${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.LEFT_SITE}
            name={`${ResultType.LEFT}.${FormField.LEFT_SITE}`}
            options={Object.values(LeftRightSite).map((value) => ({
              label: value,
              value,
            }))}
            inline
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.BMD}
            name={`${ResultType.LEFT}.${FormField.BMD}`}
            type="number"
            unit={UnitType.BMD}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Young Adult</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.T_SCORE}
            name={`${ResultType.LEFT}.${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LEFT}.${FormField.YOUNG_ADULT_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Age-matched</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.Z_SCORE}
            name={`${ResultType.LEFT}.${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LEFT}.${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.FOREARM_SITE}
            name={`${ResultType.FOREARM}.${FormField.FOREARM_SITE}`}
            options={Object.values(ForearmSite).map((value) => ({
              label: value,
              value,
            }))}
            inline
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.BMD}
            name={`${ResultType.FOREARM}.${FormField.BMD}`}
            type="number"
            unit={UnitType.BMD}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Young Adult</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.T_SCORE}
            name={`${ResultType.FOREARM}.${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.FOREARM}.${FormField.YOUNG_ADULT_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Age-matched</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.Z_SCORE}
            name={`${ResultType.FOREARM}.${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.FOREARM}.${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <span className="fw-bold">Total body</span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.BMD}
            name={`${ResultType.TOTAL_BODY}.${FormField.BMD}`}
            type="number"
            unit={UnitType.BMD}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Young Adult</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.T_SCORE}
            name={`${ResultType.TOTAL_BODY}.${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.TOTAL_BODY}.${FormField.YOUNG_ADULT_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col d-flex align-items-center">
          <span className="fw-bold">Age-matched</span>
        </div>
        <div className="col">
          <Input
            label={FormLabel.Z_SCORE}
            name={`${ResultType.TOTAL_BODY}.${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.TOTAL_BODY}.${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Total Body Composition</h3>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.BMI}
            name={FormField.BMI}
            type="number"
            unit={UnitType.BMI}
            disabled
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.BMI_CLASSIFICATION}
            name={FormField.BMI_CLASSIFICATION}
            type="text"
            unit={UnitType.BMI}
            disabled
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.TOTAL_BODY_MASS}
            name={FormField.TOTAL_BODY_MASS}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <span className="fw-bold">Whole body composition</span>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-6 col-sm-4 col-lg-6 col-xl-4 mb-3 mb-sm-0 mb-lg-3 mb-xl-0">
          <Input
            label={FormLabel.FAT}
            name={FormField.FAT}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-6 col-xl-4 mb-3 mb-sm-0 mb-lg-3 mb-xl-0">
          <Input
            label={FormLabel.LEAN}
            name={FormField.LEAN}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
        <div className="col-12 col-sm-4 col-lg-12 col-xl-4 mb-3 mb-sm-0 mb-lg-3 mb-xl-0">
          <Input
            label={FormLabel.BONE_MINERAL}
            name={FormField.BONE_MINERAL}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Findings</h3>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Radio
            label={FormField.SHOW_Z_SCORES}
            name={FormField.SHOW_Z_SCORES}
            options={Object.values(ShowZScores).map((value) => ({
              label: value,
              value,
            }))}
            inline
            hideLabel
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Textarea
            label={FormLabel.INTERPRETATION}
            name={FormField.INTERPRETATION}
            rows={5}
            disabled
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Assessment</h3>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Textarea
            label={FormLabel.ASSESSMENT}
            name={FormField.ASSESSMENT}
            rows={3}
            disabled
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.HIP_FRACTURE_RISK}
            name={FormField.HIP_FRACTURE_RISK}
            type="number"
            unit={UnitType.PERCENT}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <Input
            label={FormLabel.MAJOR_BONE_FACTURE_RISK}
            name={FormField.MAJOR_BONE_FACTURE_RISK}
            type="number"
            unit={UnitType.PERCENT}
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Textarea
            label={FormLabel.RISK_FACTORS}
            name={FormField.RISK_FACTORS}
            rows={3}
            disabled
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Recommendation</h3>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Textarea
            label={FormLabel.RECOMMENDATION}
            name={FormField.RECOMMENDATION}
            rows={3}
            disabled
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <h3>Follow-up Study</h3>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Textarea
            label={FormLabel.FOLLOW_UP_STUDY}
            name={FormField.FOLLOW_UP_STUDY}
            rows={3}
            disabled
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default DxaReportForm;
