import React, { useState, useEffect } from 'react';

export default function Input({
  label,
  id,
  step,
  minValue,
  initialValue,
  onChangeData,
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [value]);

  return (
    <div className="input-field">
      <input
        type="number"
        id={id}
        step={step}
        min={minValue}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id} className="active">
        {label}
      </label>
    </div>
  );
}
