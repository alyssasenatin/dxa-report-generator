import { FormProvider, UseFormReturn } from 'react-hook-form';

import Checkbox from '../Checkbox';
import Input from '../Input';
import Radio from '../Radio';
import Select from '../Select';

import {
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

const DxaReportForm = ({ methods }: { methods: UseFormReturn }) => {
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
            defaultValue={ReportType.BASELINE}
            inline
          />
        </div>
        <div className="col">
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
            defaultValue={Sex.MALE}
            inline
          />
        </div>
        <div className="col">
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
            defaultValue={Race.ASIAN}
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
            name={FormField.LUMBAR_SITE}
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
            name={`${ResultType.LUMBAR}-${FormField.BMD}`}
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
            name={`${ResultType.LUMBAR}-${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LUMBAR}-${FormField.YOUNG_ADULT_PERCENT}`}
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
            name={`${ResultType.LUMBAR}-${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LUMBAR}-${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.RIGHT_SITE}
            name={FormField.RIGHT_SITE}
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
            name={`${ResultType.RIGHT}-${FormField.BMD}`}
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
            name={`${ResultType.RIGHT}-${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.RIGHT}-${FormField.YOUNG_ADULT_PERCENT}`}
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
            name={`${ResultType.RIGHT}-${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.RIGHT}-${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.LEFT_SITE}
            name={FormField.LEFT_SITE}
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
            name={`${ResultType.LEFT}-${FormField.BMD}`}
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
            name={`${ResultType.LEFT}-${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LEFT}-${FormField.YOUNG_ADULT_PERCENT}`}
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
            name={`${ResultType.LEFT}-${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.LEFT}-${FormField.AGE_MATCHED_PERCENT}`}
            type="number"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex flex-column justify-content-center">
          <Radio
            label={FormLabel.FOREARM_SITE}
            name={FormField.FOREARM_SITE}
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
            name={`${ResultType.FOREARM}-${FormField.BMD}`}
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
            name={`${ResultType.FOREARM}-${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.FOREARM}-${FormField.YOUNG_ADULT_PERCENT}`}
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
            name={`${ResultType.FOREARM}-${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.FOREARM}-${FormField.AGE_MATCHED_PERCENT}`}
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
            name={`${ResultType.TOTAL_BODY}-${FormField.BMD}`}
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
            name={`${ResultType.TOTAL_BODY}-${FormField.YOUNG_ADULT_T_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.TOTAL_BODY}-${FormField.YOUNG_ADULT_PERCENT}`}
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
            name={`${ResultType.TOTAL_BODY}-${FormField.AGE_MATCHED_Z_SCORE}`}
            type="number"
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.PERCENT}
            name={`${ResultType.TOTAL_BODY}-${FormField.AGE_MATCHED_PERCENT}`}
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
        <div className="col">
          <Input
            label={FormLabel.FAT}
            name={FormField.FAT}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
        <div className="col">
          <Input
            label={FormLabel.LEAN}
            name={FormField.LEAN}
            type="number"
            unit={UnitType.WEIGHT}
          />
        </div>
        <div className="col">
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
          <Input
            label={FormLabel.INTERPRETATION}
            name={FormField.INTERPRETATION}
            type="text"
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
          <Input
            label={FormLabel.ASSESSMENT}
            name={FormField.ASSESSMENT}
            type="text"
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
          <Input
            label={FormLabel.RISK_FACTORS}
            name={FormField.RISK_FACTORS}
            type="text"
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
          <Input
            label={FormLabel.RECOMMENDATION}
            name={FormField.RECOMMENDATION}
            type="text"
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
          <Input
            label={FormLabel.FOLLOW_UP_STUDY}
            name={FormField.FOLLOW_UP_STUDY}
            type="text"
            disabled
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default DxaReportForm;
