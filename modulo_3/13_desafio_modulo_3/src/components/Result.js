import React from 'react';
import Month from './Month';

export default function Result({ result }) {
  //return <div style={styles.flexRow}></div>;

  return (
    <div className="row">
      {result.map((item) => {
        const { id } = item;
        return <Month key={id} data={item} />;
      })}
    </div>
  );
}

/*
const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
  },
};
*/

// Montante =
