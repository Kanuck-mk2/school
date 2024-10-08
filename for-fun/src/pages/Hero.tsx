import { useState } from 'react';

const Hero: React.FC = () => {
  const [imageProfile, setImageProfile] = useState<number>(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
  };

  return (
    <div
      className="flex  flex-row items-center justify-center h-screen min-w-max absolute top-0 border-1 border-green-600"
      onMouseMove={handleMouseMove}
    >
      <section className=" flex flex-col border-1 border-red-600 p-4">
        <h1 className="text-5xl text-blue-700">Hello World</h1>
        <p className="text-teal-200">My name is Chad</p>
      </section>

      <section className="flex flex-row items-center justify-center border-1 border-sky-300 p-4 ml-4">
        <div className="space-y-4">
          <h2 className="text-5xl text-sky-300">
            {`${MouseEvent}`} This is section 1
          </h2>
          <p className="text-3xl text-rose-400">The hero section</p>
          <div className="w-20 h-20 bg-gray-300">
            <p>More bullshit to code shit</p>
            <img alt="stuff"></img>
          </div>
          <div className="w-20 h-20 bg-gray-300"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
