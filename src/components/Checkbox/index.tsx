import { useFormContext } from 'react-hook-form';

const Checkbox = ({
  label,
  options,
}: {
  label: string;
  options: { label: string; value: string }[];
}) => {
  const { register } = useFormContext();

  const { name, onChange, onBlur, ref } = register(label);

  return (
    <>
      <span className="fw-bold me-4">{label}</span>
      {...options.map(({ label, value }) => (
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id={`${label}-${value}`}
            type="checkbox"
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

export default Checkbox;
