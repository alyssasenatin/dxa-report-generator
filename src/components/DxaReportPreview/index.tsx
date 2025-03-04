import { UseFormReturn } from 'react-hook-form';

import { DxaReportFormInputs } from '../../types';
import { generateDocxFile } from './helpers';

const DxaReportPreview = ({
  methods,
}: {
  methods: UseFormReturn<DxaReportFormInputs>;
}) => {
  const handleButtonClick = () => {
    generateDocxFile();
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
