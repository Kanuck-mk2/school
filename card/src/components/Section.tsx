import React, { useState } from 'react';

const Section = () => {
  const [time, setTime] = useState(0);
  const medis = [
    {
      id: 1,
      name: '',
      power: '',
    },
    {
      id: 1,
      name: '',
      power: '',
    },
    {
      id: 1,
      name: '',
      power: '',
    },
    {
      id: 1,
      name: '',
      power: '',
    },
  ];
  return (
    <div className="w-full h-screen relative border-1 border-sky-500">
      <h1 className="text-sky-400 text-5xl"></h1>
      Section
    </div>
  );
};

export default Section;
