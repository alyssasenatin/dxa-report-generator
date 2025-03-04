import { useForm } from 'react-hook-form';

import {
  DxaReportFormInputs,
  ForearmSite,
  FormField,
  LeftRightSite,
  MenopausalStatus,
  Race,
  ReportType,
  ResultType,
  Sex,
  ShowZScores,
} from './types';

import DxaReportForm from './components/DxaReportForm';
import DxaReportPreview from './components/DxaReportPreview';

const App = () => {
  const methods = useForm<DxaReportFormInputs>({
    defaultValues: {
      [FormField.REPORT_TYPE]: ReportType.BASELINE,
      [FormField.MENOPAUSAL_STATUS]: MenopausalStatus.PRE_MENOPAUSAL,
      [FormField.SEX]: Sex.MALE,
      [FormField.RACE]: Race.ASIAN,
      [ResultType.LUMBAR]: {},
      [ResultType.RIGHT]: {
        [FormField.RIGHT_SITE]: LeftRightSite.FEMORAL_NECK,
      },
      [ResultType.LEFT]: {
        [FormField.LEFT_SITE]: LeftRightSite.FEMORAL_NECK,
      },
      [ResultType.FOREARM]: {
        [FormField.FOREARM_SITE]: ForearmSite.LEFT,
      },
      [ResultType.TOTAL_BODY]: {},
      [FormField.SHOW_Z_SCORES]: ShowZScores.SHOW_T_SCORES,
    } as DxaReportFormInputs,
  });

  return (
    <>
      <h1 className="text-center my-4">DXA Report Generator</h1>
      <main className="container bg-light rounded p-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <DxaReportForm methods={methods} />
          </div>
          <div className="col-12 col-lg-6">
            <DxaReportPreview methods={methods} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
