import { useState } from 'react';

const Button = () => {
  const [classSet, setClassSet] = useState(0);

  // Toggle between two class sets on click
  const handleClick = () => {
    setClassSet(classSet === 0 ? 1 : 0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Outer button */}
      <button
        type="button"
        className={`${
          classSet === 0 ? 'bg-blue-500' : 'bg-violet-500'
        } text-white font-bold py-2 px-4 rounded transition-all duration-300`}
        onClick={handleClick}
      >
        {classSet === 0 ? 'Cola?' : 'Yippee!'}
      </button>
    </div>
  );
};

export default Button;
