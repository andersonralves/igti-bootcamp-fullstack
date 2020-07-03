import React from 'react';
import Input from './Input';

export default function Form({ value, interest, period, onChangeData }) {
  const handleChangeInput = (data) => {
    onChangeData(data);
  };

  return (
    <div className="center row">
      <div className="col input-field s6 m4 l3">
        <Input
          label="Montante Inicial"
          id="inputValue"
          step="100"
          minValue="100"
          value={value}
          onChangeInput={handleChangeInput}
        />
      </div>

      <div className="col input-field s6 m4 l3">
        <Input
          label="Taxa de juros mensal"
          id="inputInterest"
          step="0.1"
          minValue="-12"
          value={interest}
          onChangeInput={handleChangeInput}
        />
      </div>

      <div className="col input-field s6 m4 l3">
        <Input
          label="Período (meses)"
          id="inputPeriod"
          step="1"
          minValue="1"
          value={period}
          onChangeInput={handleChangeInput}
        />
      </div>
    </div>
  );
}
