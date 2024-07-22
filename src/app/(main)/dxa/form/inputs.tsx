import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';

import styles from './form.module.css';
import {
  ForearmSite,
  FormField,
  LeftRightSite,
  MenopausalStatus,
  Race,
  ReportType,
  ResultType,
  Sex,
} from './enums';

const { column } = styles;

export const ReportTypeInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.REPORT_TYPE, {
    value: ReportType.BASELINE,
  });

  return (
    <FormControl>
      <Typography variant="labelLg">Report Type</Typography>
      <RadioGroup defaultValue={ReportType.BASELINE}>
        <Grid container gap="24px">
          <Grid container alignItems="center" width="fit-content">
            <Radio
              name={name}
              value={ReportType.BASELINE}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
            <Typography variant="bodyMd">Baseline</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Radio
              name={name}
              value={ReportType.FOLLOW_UP}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
            <Typography variant="bodyMd">Follow-up</Typography>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export const DateOfPreviousStudyInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(
    FormField.DATE_PREVIOUS_STUDY
  );

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.DATE_PREVIOUS_STUDY}>
        Date of previous study
      </InputLabel>
      <OutlinedInput
        id={FormField.DATE_PREVIOUS_STUDY}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const SexInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.SEX);

  return (
    <FormControl>
      <Typography variant="labelLg">Sex</Typography>
      <RadioGroup defaultValue={Sex.MALE}>
        <Grid container gap="24px">
          <Grid container alignItems="center" width="fit-content">
            <Radio
              name={name}
              value={Sex.MALE}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
            <Typography variant="bodyMd">Male</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Radio
              name={name}
              value={Sex.FEMALE}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
            <Typography variant="bodyMd">Female</Typography>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export const MenopausalStatusInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.MENOPAUSAL_STATUS);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.MENOPAUSAL_STATUS}>
        Menopausal status
      </InputLabel>
      <Select
        id={FormField.MENOPAUSAL_STATUS}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      >
        <MenuItem value={MenopausalStatus.PRE_MENOPAUSAL}>
          Pre-menopausal
        </MenuItem>
        <MenuItem value={MenopausalStatus.PERI_MENOPAUSAL}>
          Peri-menopausal
        </MenuItem>
        <MenuItem value={MenopausalStatus.POST_MENOPAUSAL}>
          Post-menopausal
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export const RaceInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.RACE);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.RACE}>Race</InputLabel>
      <Select
        id={FormField.RACE}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      >
        <MenuItem value={Race.ASIAN}>Asian</MenuItem>
        <MenuItem value={Race.HISPANIC}>Hispanic</MenuItem>
        <MenuItem value={Race.WHITE}>White</MenuItem>
        <MenuItem value={Race.OTHERS}>Others</MenuItem>
      </Select>
    </FormControl>
  );
};

export const AgeInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.AGE);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.AGE}>Age</InputLabel>
      <OutlinedInput
        id={FormField.AGE}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const HeightInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.HEIGHT);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.HEIGHT}>Height</InputLabel>
      <OutlinedInput
        id={FormField.HEIGHT}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const WeightInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.WEIGHT);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.WEIGHT}>Weight</InputLabel>
      <OutlinedInput
        id={FormField.WEIGHT}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const BmdInput = ({ resultType }: { resultType: ResultType }) => {
  const { register } = useFormContext();

  const fieldName = `${resultType}.${FormField.BMD}`;

  const { name, onBlur, onChange, ref } = register(fieldName);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={fieldName}>BMD</InputLabel>
      <OutlinedInput
        id={fieldName}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const YoungAdultTScoreInput = ({
  resultType,
}: {
  resultType: ResultType;
}) => {
  const { register } = useFormContext();

  const fieldName = `${resultType}.${FormField.YOUNG_ADULT_T_SCORE}`;

  const { name, onBlur, onChange, ref } = register(fieldName);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={fieldName}>T-score</InputLabel>
      <OutlinedInput
        id={fieldName}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const YoungAdultPercentInput = ({
  resultType,
}: {
  resultType: ResultType;
}) => {
  const { register } = useFormContext();

  const fieldName = `${resultType}.${FormField.YOUNG_ADULT_PERCENT}`;

  const { name, onBlur, onChange, ref } = register(fieldName);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={fieldName}>%</InputLabel>
      <OutlinedInput
        id={fieldName}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const AgeMatchedZScoreInput = ({
  resultType,
}: {
  resultType: ResultType;
}) => {
  const { register } = useFormContext();

  const fieldName = `${resultType}.${FormField.AGE_MATCHED_Z_SCORE}`;

  const { name, onBlur, onChange, ref } = register(fieldName);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={fieldName}>Z-score</InputLabel>
      <OutlinedInput
        id={fieldName}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const AgeMatchedPercentInput = ({
  resultType,
}: {
  resultType: ResultType;
}) => {
  const { register } = useFormContext();

  const fieldName = `${resultType}.${FormField.AGE_MATCHED_PERCENT}`;

  const { name, onBlur, onChange, ref } = register(fieldName);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="ageMatchedPercent">%</InputLabel>
      <OutlinedInput
        id="ageMatchedPercent"
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const ResultInputs = ({ resultType }: { resultType: ResultType }) => (
  <>
    <BmdInput resultType={resultType} />
    <Grid container className={column}>
      <Typography variant="labelLg" width="130px">
        Young Adult
      </Typography>
      <Grid width="calc(50% - 77px)">
        <YoungAdultTScoreInput resultType={resultType} />
      </Grid>
      <Grid width="calc(50% - 77px)">
        <YoungAdultPercentInput resultType={resultType} />
      </Grid>
    </Grid>
    <Grid container className={column}>
      <Typography variant="labelLg" width="130px">
        Age-matched
      </Typography>
      <Grid width="calc(50% - 77px)">
        <AgeMatchedZScoreInput resultType={resultType} />
      </Grid>
      <Grid width="calc(50% - 77px)">
        <AgeMatchedPercentInput resultType={resultType} />
      </Grid>
    </Grid>
  </>
);

export const LumbarSiteInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(
    `${ResultType.LUMBAR}.${FormField.LUMBAR_SITE}`
  );

  return (
    <FormControl>
      <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
        <Typography variant="titleMd">Lumbar</Typography>
        <Grid container gap="12px" width="fit-content">
          <Grid container flexWrap="nowrap" gap="12px" width="fit-content">
            {[1, 2, 3, 4].map((site) => (
              <Grid
                container
                alignItems="center"
                width="fit-content"
                key={site}
              >
                <Checkbox
                  value={site}
                  defaultChecked
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                />
                <Typography variant="titleMd">L{site}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export const RightSideInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(
    `${ResultType.RIGHT}.${FormField.RIGHT_SITE}`
  );

  return (
    <FormControl>
      <RadioGroup defaultValue={LeftRightSite.FEMORAL_NECK}>
        <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
          <Typography variant="titleMd">Right</Typography>
          <Grid container gap="12px" width="fit-content">
            <Grid container alignItems="center" width="fit-content">
              <Radio
                name={name}
                value={LeftRightSite.FEMORAL_NECK}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
              />
              <Typography variant="titleMd">femoral neck</Typography>
            </Grid>
            <Grid container alignItems="center" width="fit-content">
              <Radio
                name={name}
                value={LeftRightSite.TOTAL_HIP}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
              />
              <Typography variant="titleMd">total hip</Typography>
            </Grid>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export const LeftSideInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(
    `${ResultType.LEFT}.${FormField.LEFT_SITE}`
  );

  return (
    <FormControl>
      <RadioGroup defaultValue={LeftRightSite.FEMORAL_NECK}>
        <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
          <Typography variant="titleMd">Left</Typography>
          <Grid container gap="12px" width="fit-content">
            <Grid container alignItems="center" width="fit-content">
              <Radio
                name={name}
                value={LeftRightSite.FEMORAL_NECK}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
              />
              <Typography variant="titleMd">femoral neck</Typography>
            </Grid>
            <Grid container alignItems="center" width="fit-content">
              <Radio
                name={name}
                value={LeftRightSite.TOTAL_HIP}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
              />
              <Typography variant="titleMd">total hip</Typography>
            </Grid>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export const ForearmInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(
    `${ResultType.FOREARM}.${FormField.FOREARM_SITE}`
  );

  return (
    <FormControl>
      <RadioGroup defaultValue={ForearmSite.LEFT}>
        <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
          <Typography variant="titleMd">Forearm (33% radius)</Typography>
          <Grid container gap="12px" width="fit-content">
            <Grid container alignItems="center" width="fit-content">
              <Radio
                name={name}
                value={ForearmSite.LEFT}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
              />
              <Typography variant="titleMd">Left</Typography>
            </Grid>
            <Grid container alignItems="center" width="fit-content">
              <Radio
                name={name}
                value={ForearmSite.RIGHT}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
              />
              <Typography variant="titleMd">Right</Typography>
            </Grid>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export const BmiInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.BMI);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.BMI} disabled shrink>
        BMI
      </InputLabel>
      <OutlinedInput
        id={FormField.BMI}
        type="number"
        disabled
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const ClassificationInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(
    FormField.BMI_CLASSIFICATION
  );

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.BMI_CLASSIFICATION} disabled shrink>
        Classification
      </InputLabel>
      <OutlinedInput
        id={FormField.BMI_CLASSIFICATION}
        disabled
        multiline
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const TotalBodyMassInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.TOTAL_BODY_MASS);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.TOTAL_BODY_MASS}>
        Total body mass
      </InputLabel>
      <OutlinedInput
        id={FormField.TOTAL_BODY_MASS}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const FatInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.FAT);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.FAT}>Fat</InputLabel>
      <OutlinedInput
        id={FormField.FAT}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const LeanInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.LEAN);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.LEAN}>Lean</InputLabel>
      <OutlinedInput
        id={FormField.LEAN}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const BoneMineralInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.BONE_MINERAL);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.BONE_MINERAL}>Bone mineral</InputLabel>
      <OutlinedInput
        id={FormField.BONE_MINERAL}
        type="number"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const WholeBodyCompositionInput = () => (
  <>
    <Typography variant="titleMd">Whole Body Composition</Typography>
    <Grid container className={column}>
      <Grid minWidth="200px" width="calc(33.3% - 8px)">
        <FatInput />
      </Grid>
      <Grid minWidth="200px" width="calc(33.3% - 8px)">
        <LeanInput />
      </Grid>
      <Grid minWidth="200px" width="calc(33.3% - 8px)">
        <BoneMineralInput />
      </Grid>
    </Grid>
  </>
);

export const ShowZScoresInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.SHOW_Z_SCORES);

  return (
    <FormControl>
      <RadioGroup defaultValue={false}>
        <Grid container gap="24px">
          <Grid container alignItems="center" width="fit-content">
            <Radio
              name={name}
              value={false}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
            <Typography variant="bodyMd">Show T-scores only</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Radio
              name={name}
              value
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
            <Typography variant="bodyMd">
              Show both T-scores and Z-scores
            </Typography>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export const InterpretationInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.INTERPRETATION);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.INTERPRETATION} disabled shrink>
        Interpretation
      </InputLabel>
      <OutlinedInput
        id={FormField.INTERPRETATION}
        disabled
        multiline
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const AssessmentInput = () => {
  const { register } = useFormContext();

  const { name, onBlur, onChange, ref } = register(FormField.ASSESSMENT);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={FormField.ASSESSMENT} disabled shrink>
        Assessment
      </InputLabel>
      <OutlinedInput
        id={FormField.ASSESSMENT}
        disabled
        multiline
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    </FormControl>
  );
};

export const HipFractureRiskInput = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="hipFractureRisk">
      10-year risk for hip fracture
    </InputLabel>
    <OutlinedInput id="hipFractureRisk" type="number" />
  </FormControl>
);

export const MajorBoneFractureRiskInput = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="majorBoneFractureRisk">
      10-year risk for major bone fracture
    </InputLabel>
    <OutlinedInput id="majorBoneFractureRisk" type="number" />
  </FormControl>
);

export const RiskFactorsInput = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="riskFactors" disabled shrink>
      Risk factors
    </InputLabel>
    <OutlinedInput id="riskFactors" disabled />
  </FormControl>
);

export const RecommendationInput = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="recommendation" disabled shrink>
      Recommendation
    </InputLabel>
    <OutlinedInput id="recommendation" disabled />
  </FormControl>
);

export const FollowUpStudyInput = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="followUpStudy" disabled shrink>
      Follow-up study
    </InputLabel>
    <OutlinedInput id="followUpStudy" disabled />
  </FormControl>
);
