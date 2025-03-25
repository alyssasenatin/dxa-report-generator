import { useFormContext } from 'react-hook-form';

import { UnitType } from '../../types';

const Input = ({
  type,
  label,
  name,
  step,
  unit,
  disabled = false,
}: {
  type: string;
  label: string;
  name: string;
  step?: string;
  unit?: UnitType;
  disabled?: boolean;
}) => {
  const { register } = useFormContext();

  return (
    <div className="input-group">
      <div className="form-floating">
        <input
          className="form-control"
          id={name}
          type={type}
          placeholder={label}
          disabled={disabled}
          {...register(name, {
            ...(type === 'number' && {
              setValueAs: (value: string) =>
                value
                  ? parseFloat(value).toFixed(
                      step === '0.001' ? 3 : step === '0.1' ? 1 : 0
                    )
                  : value,
            }),
          })}
          {...(type === 'date' && {
            max: new Date().toISOString().split('T')[0],
          })}
          {...(type === 'number' &&
            step && {
              step,
            })}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {unit && (
        <span className="input-group-text">
          {unit === UnitType.HEIGHT && 'cm'}
          {unit === UnitType.WEIGHT && 'kg'}
          {unit === UnitType.PERCENT && '%'}
          {unit === UnitType.BMD && (
            <>
              g/cm <sup>2</sup>
            </>
          )}
          {unit === UnitType.BMI && (
            <>
              kg/m <sup>2</sup>
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
