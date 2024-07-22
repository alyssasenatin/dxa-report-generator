import {
  BmiClassification,
  ForearmSite,
  LeftRightSite,
  MenopausalStatus,
  ReportType,
  Sex,
} from './enums';

export interface TestResult {
  ageMatchedPercent: number;
  ageMatchedZScore: number;
  bmd: number;
  youngAdultPercent: number;
  youngAdultTScore: number;
}

export interface ForearmTestResult extends TestResult {
  forearmSite: ForearmSite;
}

export interface LeftTestResult extends TestResult {
  leftSite: LeftRightSite;
}

export interface LumbarTestResult extends TestResult {
  lumbarSite: string[];
}

export interface RightTestResult extends TestResult {
  rightSite: LeftRightSite;
}

export interface DxaReportFormInputs {
  age: number;
  assessment: string;
  bmi: number;
  bmiClassification: BmiClassification;
  height: number;
  interpretation: string;
  forearm: ForearmTestResult;
  left: LeftTestResult;
  lumbar: LumbarTestResult;
  menopausalStatus: MenopausalStatus;
  reportType: ReportType;
  right: RightTestResult;
  sex: Sex;
  showZScores: boolean;
  totalBody: TestResult;
  weight: number;
}
