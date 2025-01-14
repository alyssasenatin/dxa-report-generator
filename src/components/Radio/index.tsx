import { useFormContext } from 'react-hook-form';

const Radio = ({
  label: formLabel,
  name: formName,
  options,
  defaultValue = '',
  inline = false,
  hideLabel = false,
}: {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
  inline?: boolean;
  hideLabel?: boolean;
}) => {
  const { register } = useFormContext();

  const { name, onChange, onBlur, ref } = register(formName, {
    value: defaultValue,
  });

  return (
    <>
      {!hideLabel && <span className="fw-bold mb-1 me-4">{formLabel}</span>}
      <div className="ps-2">
        {...options.map(({ label, value }) => (
          <div className={`form-check${inline ? ' form-check-inline' : ''}`}>
            <input
              className="form-check-input"
              id={`${formName}-${value}`}
              type="radio"
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

export default Radio;
