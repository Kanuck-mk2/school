import voyagerImage from '../assets/voyager-2.jpg';



const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-screen object-cover object-center"
        src={voyagerImage}
        alt="Voyager"
      />
      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <h1 className='flex top-0 text-5xl text-sky-400 font-orbitron text-glow'>Voyager 2</h1>
      </div>
    </div>
  );
};

export default Hero;
