import { Button, Grid, Typography } from '@mui/material';
import {
  Age,
  Assessment,
  Bmi,
  Classification,
  DateOfPreviousStudy,
  FollowUpStudy,
  Forearm,
  Height,
  HipFractureRisk,
  Interpretation,
  LeftSide,
  LumbarSite,
  MajorBoneFractureRisk,
  MenopausalStatus,
  Race,
  Recommendation,
  ReportType,
  ResultInputs,
  RightSide,
  RiskFactors,
  Sex,
  ShowZScores,
  TotalBodyMass,
  Weight,
  WholeBodyComposition,
} from './inputs';

import styles from './form.module.css';

const { form, section, column } = styles;

const DxaReportForm = () => (
  <Grid container className={form}>
    <Typography variant="displaySm">DXA Report Contents</Typography>

    <Grid
      container
      alignItems="center"
      gap="12px"
      paddingBottom="16px"
      width="100%"
    >
      <Grid minWidth="300px">
        <ReportType />
      </Grid>
      <Grid flexGrow={1} minWidth="275px">
        <DateOfPreviousStudy />
      </Grid>
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Patient Information</Typography>
      <Grid container className={column}>
        <Grid minWidth="300px">
          <Sex />
        </Grid>
        <Grid flexGrow={1} minWidth="275px">
          <MenopausalStatus />
        </Grid>
      </Grid>
      <Grid container className={column}>
        <Grid width="calc(50% - 6px)">
          <Race />
        </Grid>
        <Grid width="calc(50% - 6px)">
          <Age />
        </Grid>
      </Grid>
      <Grid container className={column}>
        <Grid width="calc(50% - 6px)">
          <Height />
        </Grid>
        <Grid width="calc(50% - 6px)">
          <Weight />
        </Grid>
      </Grid>
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Test Results</Typography>
      <Grid container gap="12px">
        <Grid container gap="12px" paddingBottom="16px">
          <LumbarSite />
          <ResultInputs />
        </Grid>
        <Grid container gap="12px" paddingBottom="16px">
          <RightSide />
          <ResultInputs />
        </Grid>
        <Grid container gap="12px" paddingBottom="16px">
          <LeftSide />
          <ResultInputs />
        </Grid>
        <Grid container gap="12px" paddingBottom="16px">
          <Forearm />
          <ResultInputs />
        </Grid>
        <Grid container gap="12px" paddingBottom="16px">
          <Typography variant="titleMd">Total body</Typography>
          <ResultInputs />
        </Grid>
      </Grid>
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Total Body Composition</Typography>
      <Grid container className={column}>
        <Grid width="calc(50% - 6px)">
          <Bmi />
        </Grid>
        <Grid width="calc(50% - 6px)">
          <Classification />
        </Grid>
        <TotalBodyMass />
        <WholeBodyComposition />
      </Grid>
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Findings</Typography>
      <ShowZScores />
      <Interpretation />
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Assessment</Typography>
      <Assessment />
      <HipFractureRisk />
      <MajorBoneFractureRisk />
      <RiskFactors />
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Recommendation</Typography>
      <Recommendation />
    </Grid>

    <Grid container className={section} flexDirection="column">
      <Typography variant="headlineSm">Follow-up Study</Typography>
      <FollowUpStudy />
    </Grid>

    <Grid container flexDirection="row-reverse" gap="12px" width="100%">
      <Button variant="contained" color="primary">
        Generate
      </Button>
      <Button variant="contained" color="secondary">
        Reset
      </Button>
    </Grid>
  </Grid>
);

export default DxaReportForm;