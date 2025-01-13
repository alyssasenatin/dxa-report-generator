import { useFormContext } from 'react-hook-form';

const Select = ({
  label,
  options,
}: {
  label: string;
  options: { label: string; value: string }[];
}) => {
  const { register } = useFormContext();

  return (
    <div className="form-floating">
      <select className="form-select" id={label} {...register(label)}>
        {...options.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Select;
