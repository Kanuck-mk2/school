import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className=" fixed top-0 left-4 md:hidden p-4  text-white z-[999] cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`w-[35px] h-[5px] bg-white text-white my-[6px] transition-transform duration-400 ${
            nav ? 'translate-y-[11px] rotate-[-45deg] bg-sky-400' : ''
          }`}
        ></div>
        <div
          className={`w-[35px] h-[5px] bg-white my-[6px] transition-transform duration-400 ${
            nav ? ' rotate-[45deg] bg-sky-400' : ''
          }`}
        ></div>
        <div
          className={`w-[35px] h-[5px] bg-white my-[6px] transition-transform duration-400 ${
            nav ? 'opacity-0' : ''
          }`}
        ></div>
      </div>
      {nav && (
        <div className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          nav ? 'block' : 'hidden'
        }`}>
          <a href="#home" className="text-3xl text-sky-400 py-4" onClick={handleClick}>
            Home
          </a>
          <a href="#about" className="text-3xl text-sky-400 py-4" onClick={handleClick}>
            Home
          </a>
          <a href="#mission" className="text-3xl text-sky-400 py-4" onClick={handleClick}>
            Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
