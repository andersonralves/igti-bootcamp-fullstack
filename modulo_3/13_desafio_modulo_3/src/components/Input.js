import React, { useState } from 'react';

export default function Input({
  label,
  id,
  step,
  minValue,
  value,
  onChangeInput,
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    const data = { id, value };

    onChangeInput(data);
  };

  return (
    <div className="input-field">
      <input
        type="number"
        id={id}
        step={step}
        min={minValue}
        value={inputValue}
        onChange={handleChange}
      />
      <label htmlFor={id} className="active">
        {label}
      </label>
    </div>
  );
}
