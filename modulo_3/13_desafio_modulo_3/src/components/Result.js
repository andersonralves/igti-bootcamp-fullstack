import React, { useState, useEffect } from 'react';
import Month from './Month';

export default function Result({ calculatedInterest }) {
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    setInterest(calculatedInterest);
  }, [calculatedInterest]);

  return <div style={styles.flexRow}></div>;
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
  },
};
