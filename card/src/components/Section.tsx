import React, { useState } from 'react';

const Section = () => {
  const [time, setTime] = useState(0);
  const medis = [
    {
      id: 1,
      name: 'medi1',
      power: '',
    },
    {
      id: 2,
      name: 'medi2',
      power: '',
    },
    {
      id: 3,
      name: 'medi3',
      power: '',
    },
    {
      id: 4,
      name: 'medi4',
      power: '',
    },
  ];
  return (
    <div className="w-full h-screen relative border-1 border-sky-500">
      <h1 className="text-sky-400 text-5xl">Title 1</h1>
      <div className="">
        {medis.map((medi, index) => (
          <div key={medi.id} className="p-4 border-b">
            <div>{medi.id}</div>
            <div>{medi.name}</div>
            <div>{medi.power}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
