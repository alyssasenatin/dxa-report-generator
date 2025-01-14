import { useForm } from 'react-hook-form';

import DxaReportForm from './components/DxaReportForm';

const App = () => {
  const methods = useForm();

  return (
    <>
      <h1 className="text-center my-4">DXA Report Generator</h1>
      <main className="container bg-light rounded p-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <DxaReportForm methods={methods} />
          </div>
          <div className="col-12 col-md-6">Preview</div>
        </div>
      </main>
    </>
  );
};

export default App;
