import { useFormContext } from 'react-hook-form';

const Radio = ({
  label,
  options,
  defaultValue = '',
}: {
  label: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
}) => {
  const { register } = useFormContext();

  const { name, onChange, onBlur, ref } = register(label, {
    value: defaultValue,
  });

  return (
    <>
      <span className="fw-bold me-4">{label}</span>
      {...options.map(({ label, value }) => (
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id={`${label}-${value}`}
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
          <label className="form-check-label" htmlFor={`${label}-${value}`}>
            {label}
          </label>
        </div>
      ))}
    </>
  );
};

export default Radio;
