import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import styles from '../styles.module.css';

const { column } = styles;

export const ReportType = () => (
  <FormControl>
    <Typography variant="labelLg">Report Type</Typography>
    <RadioGroup>
      <Grid container gap="24px">
        <Grid container alignItems="center" width="fit-content">
          <Radio />
          <Typography variant="bodyMd">Follow-up</Typography>
        </Grid>
        <Grid container alignItems="center" width="fit-content">
          <Radio />
          <Typography variant="bodyMd">Baseline</Typography>
        </Grid>
      </Grid>
    </RadioGroup>
  </FormControl>
);

export const DateOfPreviousStudy = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="previousStudyDate">Date of previous study</InputLabel>
    <OutlinedInput id="previousStudyDate" />
  </FormControl>
);

export const Sex = () => (
  <FormControl>
    <Typography variant="labelLg">Sex</Typography>
    <RadioGroup>
      <Grid container gap="24px">
        <Grid container alignItems="center" width="fit-content">
          <Radio />
          <Typography variant="bodyMd">Male</Typography>
        </Grid>
        <Grid container alignItems="center" width="fit-content">
          <Radio />
          <Typography variant="bodyMd">Female</Typography>
        </Grid>
      </Grid>
    </RadioGroup>
  </FormControl>
);

export const MenopausalStatus = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="menopausalStatus">Menopausal status</InputLabel>
    <TextField id="menopausalStatus" select>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
    </TextField>
  </FormControl>
);

export const Race = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="race">Race</InputLabel>
    <TextField id="race" select>
      <MenuItem>Asian</MenuItem>
      <MenuItem>Hispanic</MenuItem>
      <MenuItem>White</MenuItem>
      <MenuItem>Others</MenuItem>
    </TextField>
  </FormControl>
);

export const Age = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="age">Age</InputLabel>
    <OutlinedInput id="age" type="number" />
  </FormControl>
);

export const Height = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="height">Height</InputLabel>
    <OutlinedInput id="height" type="number" />
  </FormControl>
);

export const Weight = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="weight">Weight</InputLabel>
    <OutlinedInput id="weight" type="number" />
  </FormControl>
);

export const Bmd = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="bmd">BMD</InputLabel>
    <OutlinedInput id="bmd" type="number" />
  </FormControl>
);

export const YoungAdultTScore = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="youngAdultTScore">T-score</InputLabel>
    <OutlinedInput id="youngAdultTScore" type="number" />
  </FormControl>
);

export const YoungAdultPercent = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="youngAdultPercent">%</InputLabel>
    <OutlinedInput id="youngAdultPercent" type="number" />
  </FormControl>
);

export const AgeMatchedZScore = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="ageMatchedZScore">Z-score</InputLabel>
    <OutlinedInput id="ageMatchedZScore" type="number" />
  </FormControl>
);

export const AgeMatchedPercent = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="ageMatchedPercent">%</InputLabel>
    <OutlinedInput id="ageMatchedPercent" type="number" />
  </FormControl>
);

export const ResultInputs = () => (
  <>
    <Bmd />
    <Grid container className={column}>
      <Typography variant="labelLg" width="130px">
        Young Adult
      </Typography>
      <Grid width="calc(50% - 77px)">
        <YoungAdultTScore />
      </Grid>
      <Grid width="calc(50% - 77px)">
        <YoungAdultPercent />
      </Grid>
    </Grid>
    <Grid container className={column}>
      <Typography variant="labelLg" width="130px">
        Age-matched
      </Typography>
      <Grid width="calc(50% - 77px)">
        <AgeMatchedZScore />
      </Grid>
      <Grid width="calc(50% - 77px)">
        <AgeMatchedPercent />
      </Grid>
    </Grid>
  </>
);

export const LumbarSite = () => (
  <FormControl>
    <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
      <Typography variant="titleMd">Lumbar</Typography>
      <Grid container gap="12px" width="fit-content">
        <Grid container flexWrap="nowrap" gap="12px" width="fit-content">
          <Grid container alignItems="center" width="fit-content">
            <Checkbox />
            <Typography variant="titleMd">L1</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Checkbox />
            <Typography variant="titleMd">L2</Typography>
          </Grid>
        </Grid>
        <Grid container flexWrap="nowrap" gap="12px" width="fit-content">
          <Grid container alignItems="center" width="fit-content">
            <Checkbox />
            <Typography variant="titleMd">L3</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Checkbox />
            <Typography variant="titleMd">L4</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </FormControl>
);

export const RightSide = () => (
  <FormControl>
    <RadioGroup>
      <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
        <Typography variant="titleMd">Right</Typography>
        <Grid container gap="12px" width="fit-content">
          <Grid container alignItems="center" width="fit-content">
            <Radio />
            <Typography variant="titleMd">femoral neck</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Radio />
            <Typography variant="titleMd">total hip</Typography>
          </Grid>
        </Grid>
      </Grid>
    </RadioGroup>
  </FormControl>
);

export const LeftSide = () => (
  <FormControl>
    <RadioGroup>
      <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
        <Typography variant="titleMd">Left</Typography>
        <Grid container gap="12px" width="fit-content">
          <Grid container alignItems="center" width="fit-content">
            <Radio />
            <Typography variant="titleMd">femoral neck</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Radio />
            <Typography variant="titleMd">total hip</Typography>
          </Grid>
        </Grid>
      </Grid>
    </RadioGroup>
  </FormControl>
);

export const Forearm = () => (
  <FormControl>
    <RadioGroup>
      <Grid container alignItems="center" flexWrap="nowrap" gap="24px">
        <Typography variant="titleMd">Forearm (33% radius)</Typography>
        <Grid container gap="12px" width="fit-content">
          <Grid container alignItems="center" width="fit-content">
            <Radio />
            <Typography variant="titleMd">Left</Typography>
          </Grid>
          <Grid container alignItems="center" width="fit-content">
            <Radio />
            <Typography variant="titleMd">Right</Typography>
          </Grid>
        </Grid>
      </Grid>
    </RadioGroup>
  </FormControl>
);

export const Bmi = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="bmi" disabled>
      BMI
    </InputLabel>
    <OutlinedInput id="bmi" type="number" disabled />
  </FormControl>
);

export const Classification = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="classification" disabled>
      Classification
    </InputLabel>
    <OutlinedInput id="classification" disabled />
  </FormControl>
);

export const TotalBodyMass = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="totalBodyMass">Total body mass</InputLabel>
    <OutlinedInput id="totalBodyMass" type="number" />
  </FormControl>
);

export const Fat = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="fat">Fat</InputLabel>
    <OutlinedInput id="fat" type="number" />
  </FormControl>
);

export const Lean = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="lean">Lean</InputLabel>
    <OutlinedInput id="lean" type="number" />
  </FormControl>
);

export const BoneMineral = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="boneMineral">Bone mineral</InputLabel>
    <OutlinedInput id="boneMineral" type="number" />
  </FormControl>
);

export const WholeBodyComposition = () => (
  <>
    <Typography variant="titleMd">Whole Body Composition</Typography>
    <Grid container className={column}>
      <Grid minWidth="200px" width="calc(33.3% - 8px)">
        <Fat />
      </Grid>
      <Grid minWidth="200px" width="calc(33.3% - 8px)">
        <Lean />
      </Grid>
      <Grid minWidth="200px" width="calc(33.3% - 8px)">
        <BoneMineral />
      </Grid>
    </Grid>
  </>
);

export const ShowZScores = () => (
  <FormControl>
    <RadioGroup>
      <Grid container gap="12px">
        <Grid container alignItems="center" width="fit-content">
          <Radio />
          <Typography variant="bodyMd">Show T-scores only</Typography>
        </Grid>
        <Grid container alignItems="center" width="fit-content">
          <Radio />
          <Typography variant="bodyMd">
            Show both T-scores and Z-scores
          </Typography>
        </Grid>
      </Grid>
    </RadioGroup>
  </FormControl>
);

export const Interpretation = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="interpretation" disabled>
      Interpretation
    </InputLabel>
    <OutlinedInput id="interpretation" disabled />
  </FormControl>
);

export const Assessment = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="assessment" disabled>
      Assessment
    </InputLabel>
    <OutlinedInput id="assessment" disabled />
  </FormControl>
);

export const HipFractureRisk = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="hipFractureRisk">
      10-year risk for hip fracture
    </InputLabel>
    <OutlinedInput id="hipFractureRisk" type="number" />
  </FormControl>
);

export const MajorBoneFractureRisk = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="majorBoneFractureRisk">
      10-year risk for major bone fracture
    </InputLabel>
    <OutlinedInput id="majorBoneFractureRisk" type="number" />
  </FormControl>
);

export const RiskFactors = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="riskFactors" disabled>
      Risk factors
    </InputLabel>
    <OutlinedInput id="riskFactors" disabled />
  </FormControl>
);

export const Recommendation = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="recommendation" disabled>
      Recommendation
    </InputLabel>
    <OutlinedInput id="recommendation" disabled />
  </FormControl>
);

export const FollowUpStudy = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="followUpStudy" disabled>
      Follow-up study
    </InputLabel>
    <OutlinedInput id="followUpStudy" disabled />
  </FormControl>
);
