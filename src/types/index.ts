export enum BmiClassification {
  DEFAULT = '',
  NORMAL = 'Normal',
  OBESE_1 = 'Obese I',
  OBESE_2 = 'Obese II',
  OVERWEIGHT = 'Overweight',
  UNDERWEIGHT = 'Underweight',
}

export enum ForearmSite {
  LEFT = 'Left',
  RIGHT = 'Right',
}

export enum FormField {
  AGE = 'age',
  AGE_MATCHED_PERCENT = 'ageMatchedPercent',
  AGE_MATCHED_Z_SCORE = 'ageMatchedZScore',
  ASSESSMENT = 'assessment',
  BMD = 'bmd',
  BMI = 'bmi',
  BMI_CLASSIFICATION = 'bmiClassification',
  BONE_MINERAL = 'boneMineral',
  DATE_PREVIOUS_STUDY = 'Date of previous study',
  FAT = 'fat',
  FOREARM_SITE = 'forearmSite',
  HEIGHT = 'height',
  INTERPRETATION = 'interpretation',
  LEAN = 'lean',
  LEFT_SITE = 'leftSite',
  LUMBAR_SITE = 'lumbarSite',
  MENOPAUSAL_STATUS = 'Menopausal status',
  RACE = 'race',
  REPORT_TYPE = 'Report Type',
  RIGHT_SITE = 'rightSite',
  SEX = 'sex',
  SHOW_Z_SCORES = 'showZScores',
  TOTAL_BODY_MASS = 'totalBodyMass',
  WEIGHT = 'weight',
  YOUNG_ADULT_PERCENT = 'youngAdultPercent',
  YOUNG_ADULT_T_SCORE = 'youngAdultTScore',
}

export enum MenopausalStatus {
  PRE_MENOPAUSAL = 'Pre-menopausal',
  PERI_MENOPAUSAL = 'Peri-menopausal',
  POST_MENOPAUSAL = 'Post-menopausal',
}

export enum Race {
  ASIAN = 'asian',
  HISPANIC = 'hispanic',
  WHITE = 'white',
  OTHERS = 'others',
}

export enum ReportType {
  BASELINE = 'Baseline',
  FOLLOW_UP = 'Follow-up',
}

export enum ResultType {
  LUMBAR = 'lumbar',
  RIGHT = 'right',
  LEFT = 'left',
  FOREARM = 'forearm',
  TOTAL_BODY = 'totalBody',
}

export enum LeftRightSite {
  FEMORAL_NECK = 'femoralNeck',
  TOTAL_HIP = 'totalHip',
}

export enum Sex {
  MALE = 'male',
  FEMALE = 'female',
}

export enum UnitType {
  LENGTH = 'length',
  WEIGHT = 'weight',
  BMD = 'bmd',
}

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
