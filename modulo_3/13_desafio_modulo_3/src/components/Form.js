import React from 'react';
import Input from './Input';

export default function Inputs() {
  return (
    <div style={styles.flexRow}>
      <Input
        label="Montante Inicial"
        id="inputMontante"
        step="100"
        minValue="0"
        initialValue="1000"
      />
      <Input
        label="Taxa de juros mensal"
        id="inputJuros"
        step="0.1"
        minValue="-12"
        initialValue="0.5"
      />
      <Input
        label="Período (meses)"
        id="inputPeriodo"
        step="1"
        minValue="1"
        initialValue="1"
      />
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
