import React from 'react';
import Values from './Values';

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoneyPositiveNegative(value) {
  const money = moneyFormatter.format(value);

  if (value >= 0) {
    return `+${money}`;
  }

  return money;
}

function formatMoney(value) {
  return moneyFormatter.format(value);
}

function formatPercent(value) {
  return value.toFixed(2).replace('.', ',') + '%';
}

export default function Month({ data }) {
  const { id, value, difference, percentage, profit } = data;

  const classGoodValue = 'green-text darken-4';
  const classGoodPercent = 'blue-text darken-4';
  const classBadValue = 'red-text darken-4';
  const classBadPercent = 'orange-text darken-4';

  const classValue = profit ? classGoodValue : classBadValue;
  const classPercent = profit ? classGoodPercent : classBadPercent;

  return (
    <div className="col s6 m3 l2">
      <div style={styles.flexRow}>
        <span style={{ marginRight: '5px', fontWeigh: 'bold' }}>{id}</span>

        <div>
          <div className={classValue}>{formatMoney(value)}</div>
          <div className={classValue}>
            {formatMoneyPositiveNegative(difference)}
          </div>
          <div className={classPercent}>{formatPercent(percentage)}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    border: '1px solid lightgray',
    borderRadius: '4px',
    margin: '4px',
    padding: '4px',

    fontWeight: 'bold',
  },
};
