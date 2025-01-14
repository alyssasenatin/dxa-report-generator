import { useFormContext } from 'react-hook-form';

const Select = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { label: string; value: string }[];
}) => {
  const { register } = useFormContext();

  return (
    <div className="form-floating">
      <select className="form-select" id={name} {...register(name)}>
        {...options.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Select;
