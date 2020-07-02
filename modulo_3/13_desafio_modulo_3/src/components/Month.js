import React from 'react';
import Values from './Values';

export default function Month() {
  return (
    <div style={styles.month}>
      <div style={styles.flexRow}>
        <span style={styles.span}>1</span>
        <Values />
      </div>
    </div>
  );
}

const styles = {
  month: {
    border: '1px solid lightgray',
    borderRadius: '5px',
    marginRight: '10px',
    padding: '10px',
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  span: {
    fontWeight: 'bold',
    marginRight: '5px',
  },
};
