import voyagerImage from '/assets/voyager-2.jpg';

const Hero: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen relative ">
      <img
        className="w-full h-screen object-cover object-center"
        src={voyagerImage}
        alt="Voyager"
      />
      <div className=" border w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center">
        <h1 className=" flex top-0 text-sky-400 font-orbitron text-6xl ">
          Voyager 2
        </h1>

        <h2 className="text-sky-400 font-orbitron text-4xl p-3">
          The spacecraft and mission
        </h2>
      </div>
    </div>
  );
};

export default Hero;
