import { useFormContext } from 'react-hook-form';

const Textarea = ({
  label,
  name,
  rows,
  disabled = false,
}: {
  label: string;
  name: string;
  rows: number;
  disabled?: boolean;
}) => {
  const { register } = useFormContext();

  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        id={name}
        placeholder={label}
        disabled={disabled}
        style={{
          height: `${33 * rows}px`,
        }}
        {...register(name)}
      ></textarea>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Textarea;
