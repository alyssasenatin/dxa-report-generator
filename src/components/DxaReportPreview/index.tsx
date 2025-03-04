import { UseFormReturn } from 'react-hook-form';

import { DxaReportFormInputs } from '../../types';
import { generateDocxFile } from './helpers';

const DxaReportPreview = ({
  methods,
}: {
  methods: UseFormReturn<DxaReportFormInputs>;
}) => {
  const { watch } = methods;

  const {
    age,
    bmi,
    bmiClassification,
    boneMineral,
    dateOfPreviousStudy,
    fat,
    forearm,
    hipFractureRisk,
    lean,
    left,
    lumbar,
    majorBoneFractureRisk,
    menopausalStatus,
    race,
    reportType,
    right,
    sex,
    showZScores,
    totalBody,
    totalBodyMass,
  } = watch();

  const handleButtonClick = () => {
    generateDocxFile(
      age,
      bmi,
      bmiClassification,
      boneMineral,
      dateOfPreviousStudy,
      fat,
      forearm,
      hipFractureRisk,
      lean,
      left,
      lumbar,
      majorBoneFractureRisk,
      menopausalStatus,
      race,
      reportType,
      right,
      sex,
      showZScores,
      totalBody,
      totalBodyMass
    );
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleButtonClick}
    >
      Generate
    </button>
  );
};

export default DxaReportPreview;
