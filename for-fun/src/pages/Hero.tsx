import jupiterImage from '../assets/jupiter.jpg';



const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-screen object-cover object-center"
        src={jupiterImage}
        alt="Neptune"
      />
      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <h1 className='flex top-0 text-5xl text-sky-400'>Hello World</h1>
      </div>
    </div>
  );
};

export default Hero;
