import React from 'react';

export default function Values() {
  return (
    <div style={styles.flexRow}>
      <span style={styles.span}>Saldo</span>
      <span style={styles.span}>Remuneracao</span>
      <span style={styles.span}>Percentual</span>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'space-between',
  },

  span: {
    textAlign: 'left',
  },
};
