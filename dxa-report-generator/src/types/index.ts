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
  DATE_PREVIOUS_STUDY = 'dateOfPreviousStudy',
  FAT = 'fat',
  FOLLOW_UP_STUDY = 'followUpStudy',
  FOREARM_SITE = 'forearmSite',
  HEIGHT = 'height',
  HIP_FRACTURE_RISK = 'hipFractureRisk',
  INTERPRETATION = 'interpretation',
  LEAN = 'lean',
  LEFT_SITE = 'leftSite',
  LUMBAR_SITE = 'lumbarSite',
  MAJOR_BONE_FACTURE_RISK = 'majorBoneFractureRisk',
  MENOPAUSAL_STATUS = 'menopausalStatus',
  RACE = 'race',
  RECOMMENDATION = 'recommendation',
  REPORT_TYPE = 'reportType',
  RIGHT_SITE = 'rightSite',
  RISK_FACTORS = 'riskFactors',
  SEX = 'sex',
  SHOW_Z_SCORES = 'showZScores',
  TOTAL_BODY_MASS = 'totalBodyMass',
  WEIGHT = 'weight',
  YOUNG_ADULT_PERCENT = 'youngAdultPercent',
  YOUNG_ADULT_T_SCORE = 'youngAdultTScore',
}

export enum FormLabel {
  AGE = 'Age',
  ASSESSMENT = 'Assessment',
  BMD = 'BMD',
  BMI = 'BMI',
  BMI_CLASSIFICATION = 'Classification',
  BONE_MINERAL = 'Bone mineral',
  DATE_PREVIOUS_STUDY = 'Date of previous study',
  FAT = 'Fat',
  FOLLOW_UP_STUDY = 'Follow-up study',
  FOREARM_SITE = 'Forearm (33% radius)',
  HEIGHT = 'Height',
  HIP_FRACTURE_RISK = '10-year risk for hip fracture',
  INTERPRETATION = 'Interpretation',
  LEAN = 'Lean',
  LEFT_SITE = 'Left',
  LUMBAR_SITE = 'Lumbar',
  MAJOR_BONE_FACTURE_RISK = '10-year risk for major bone fracture',
  MENOPAUSAL_STATUS = 'Menopausal status',
  PERCENT = '%',
  RACE = 'Race',
  RECOMMENDATION = 'Recommendation',
  REPORT_TYPE = 'Report Type',
  RIGHT_SITE = 'Right',
  RISK_FACTORS = 'Risk factors',
  SEX = 'Sex',
  T_SCORE = 'T-score',
  TOTAL_BODY_MASS = 'Total body mass',
  WEIGHT = 'Weight',
  Z_SCORE = 'Z-score',
}

export enum LeftRightSite {
  FEMORAL_NECK = 'femoral neck',
  TOTAL_HIP = 'total hip',
}

export enum LumbarSite {
  L1 = 'L1',
  L2 = 'L2',
  L3 = 'L3',
  L4 = 'L4',
}

export enum MenopausalStatus {
  PRE_MENOPAUSAL = 'Pre-menopausal',
  PERI_MENOPAUSAL = 'Peri-menopausal',
  POST_MENOPAUSAL = 'Post-menopausal',
}

export enum Race {
  ASIAN = 'Asian',
  HISPANIC = 'Hispanic',
  WHITE = 'White',
  OTHERS = 'Others',
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

export enum Sex {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum ShowZScores {
  SHOW_T_SCORES = 'Show T-scores only',
  SHOW_BOTH_T_Z_SCORES = 'Show both T-scores and Z-scores',
}

export enum UnitType {
  HEIGHT = 'height',
  WEIGHT = 'weight',
  BMD = 'bmd',
  PERCENT = 'percent',
  BMI = 'bmi',
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
  boneMineral: number;
  dateOfPreviousStudy: string;
  fat: number;
  followUpStudy: string;
  forearm: ForearmTestResult;
  height: number;
  hipFractureRisk: number;
  interpretation: string;
  lean: number;
  left: LeftTestResult;
  lumbar: LumbarTestResult;
  majorBoneFractureRisk: number;
  menopausalStatus: MenopausalStatus;
  race: Race;
  recommendation: string;
  reportType: ReportType;
  right: RightTestResult;
  riskFactors: string;
  sex: Sex;
  showZScores: ShowZScores;
  totalBody: TestResult;
  totalBodyMass: number;
  weight: number;
}
