import { useState } from 'react';

const Hero = () => {
  interface={
    mouseX: 'number'
  },
  const [imageProfile, setImageProfile] = (useState = 0);

  const mouseX = mouseX.onmousemove(0);
  return (
    <div className="flex items-center justify-center"><section className='border-1 border-red-600'>
       <h1 className="text-5xl text-blue-700">Hello World</h1>
       <p className="text-teal-200">my anme is chad</p>
    </section>
    
    </div>
  );
};

export default Hero;
