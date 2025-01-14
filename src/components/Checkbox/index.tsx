import { useFormContext } from 'react-hook-form';

const Checkbox = ({
  label: formLabel,
  name: formName,
  options,
}: {
  label: string;
  name: string;
  options: { label: string; value: string }[];
}) => {
  const { register } = useFormContext();

  const { name, onChange, onBlur, ref } = register(formLabel);

  return (
    <>
      <span className="fw-bold mb-1 me-4">{formLabel}</span>
      <div className="ps-2">
        {...options.map(({ label, value }) => (
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              id={`${formName}-${value}`}
              type="checkbox"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
            <label
              className="form-check-label"
              htmlFor={`${formName}-${value}`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
