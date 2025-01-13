import { useFormContext } from 'react-hook-form';

import { UnitType } from '../../types';

import './styles.scss';

const Input = ({
  type,
  label,
  value = '',
  unit,
  disabled = false,
}: {
  type: string;
  label: string;
  value?: string;
  unit?: UnitType;
  disabled?: boolean;
}) => {
  const { register } = useFormContext();

  return (
    <div className="input-group">
      <div className="form-floating">
        <input
          className="form-control"
          id={label}
          type={type}
          placeholder={label}
          disabled={disabled}
          {...(value ? register(label, { value }) : register(label))}
          {...(type === 'date' && {
            max: new Date().toISOString().split('T')[0],
          })}
        />
        <label htmlFor={label}>{label}</label>
      </div>
      {unit && (
        <span className="input-group-text">
          {unit === UnitType.LENGTH && 'cm'}
          {unit === UnitType.WEIGHT && 'kg'}
          {unit === UnitType.BMD && (
            <>
              g/cm <sup>2</sup>
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
