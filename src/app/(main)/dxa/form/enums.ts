export enum BmiClassification {
  DEFAULT = '',
  NORMAL = 'Normal',
  OBESE_1 = 'Obese I',
  OBESE_2 = 'Obese II',
  OVERWEIGHT = 'Overweight',
  UNDERWEIGHT = 'Underweight',
}

export enum ForearmSite {
  LEFT = 'left',
  RIGHT = 'right',
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
  DATE_PREVIOUS_STUDY = 'datePreviousStudy',
  FAT = 'fat',
  FOREARM_SITE = 'forearmSite',
  HEIGHT = 'height',
  INTERPRETATION = 'interpretation',
  LEAN = 'lean',
  LEFT_SITE = 'leftSite',
  LUMBAR_SITE = 'lumbarSite',
  MENOPAUSAL_STATUS = 'menopausalStatus',
  RACE = 'race',
  REPORT_TYPE = 'reportType',
  RIGHT_SITE = 'rightSite',
  SEX = 'sex',
  SHOW_Z_SCORES = 'showZScores',
  TOTAL_BODY_MASS = 'totalBodyMass',
  WEIGHT = 'weight',
  YOUNG_ADULT_PERCENT = 'youngAdultPercent',
  YOUNG_ADULT_T_SCORE = 'youngAdultTScore',
}

export enum MenopausalStatus {
  PRE_MENOPAUSAL = 'preMenopausal',
  PERI_MENOPAUSAL = 'periMenopausal',
  POST_MENOPAUSAL = 'postMenopausal',
}

export enum Race {
  ASIAN = 'asian',
  HISPANIC = 'hispanic',
  WHITE = 'white',
  OTHERS = 'others',
}

export enum ReportType {
  BASELINE = 'baseline',
  FOLLOW_UP = 'followUp',
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
