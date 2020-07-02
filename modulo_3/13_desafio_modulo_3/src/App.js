import React, { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

export default function App() {
  const [calculatedInterest, setCalculatedInterest] = useState([]);

  const handleCalculateInterest = () => {};

  return (
    <div className="container center">
      <Header>React - Juros Compostos</Header>
      <Form />
      <Result data={calculatedInterest} />
    </div>
  );
}
