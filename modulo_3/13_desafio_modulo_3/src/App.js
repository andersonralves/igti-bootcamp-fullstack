import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

export default function App() {
  const [value, setValue] = useState(1000);
  const [interest, setInterest] = useState(1);
  const [period, setPeriod] = useState(1);
  const [result, setResult] = useState([]);

  useEffect(() => {
    calculateResult(value, interest, period);
  }, [value, interest, period]);

  const handleChangeData = (data) => {
    if (data.id === 'inputValue') {
      setValue(+data.value);
      return;
    }

    if (data.id === 'inputInterest') {
      setInterest(+data.value);
      return;
    }

    if (data.id === 'inputPeriod') {
      setPeriod(+data.value);
      return;
    }
  };

  const calculateResult = (value, interest, period) => {
    const newResult = [];

    let currentId = 1;
    let currentValue = value;
    let percentage = 0;

    for (let i = 1; i <= period; i++) {
      const percentValue = (currentValue * Math.abs(interest)) / 100;

      currentValue =
        interest >= 0
          ? currentValue + percentValue
          : currentValue - percentValue;

      percentage = (currentValue / value - 1) * 100;

      newResult.push({
        id: currentId++,
        value: currentValue,
        difference: currentValue - value,
        percentage,
        profit: interest > 0,
      });
    }

    setResult(newResult);
  };

  return (
    <div>
      <Header>React - Juros Compostos</Header>
      <Form
        value={value}
        interest={interest}
        period={period}
        onChangeData={handleChangeData}
      />
      <Result result={result} />
    </div>
  );
}
