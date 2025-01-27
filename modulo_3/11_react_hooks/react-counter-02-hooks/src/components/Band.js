import React, { useState } from 'react';

const BAND_MEMBERS = [
  {
    id: 1,
    name: 'Neil Peart',
    instrument: 'Bateria',
  },
  {
    id: 2,
    name: 'Alex Lifeson',
    instrument: 'Guitarra',
  },
  {
    id: 1,
    name: 'Geddy Lee',
    instrument: 'Baixo',
  },
];

export default function Band() {
  const [bandName, setBandName] = useState('Rush');
  const [bandMembers, setBandMembers] = useState(BAND_MEMBERS);

  return (
    <div>
      <h4>{bandName}</h4>
      <ul>
        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <li key={id}>
              {name} - {instrument}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
