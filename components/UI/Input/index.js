const Input = ({
  type,
  label,
  placeholder,
  disabled,
  defaultValue,
  className,
  style,
  min,
  max,
  id,
  register,
  validationSchema,
  errors,
}) => {
  let input = (
    <div className="mb-4 flex justify-between items-center w-full gap-5">
      <label htmlFor={label} className="w-32 text-xs font-semibold capitalize">
        {label}*
      </label>

      <div className="w-full">
        <input
          type={type}
          name={label}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue}
          className={className}
          style={style}
          min={min}
          max={max}
          id={id}
          {...register(label, validationSchema)}
        />

        {errors[label] && (
          <div className="text-error text-xs mt-0.5">
            {errors[label].message}
          </div>
        )}
      </div>
    </div>
  );

  return input;
};

export default Input;
