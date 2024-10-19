import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className="fixed top-4 right-4 md:hidden text-white z-[20] cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`w-[35px] h-[5px] bg-white my-[6px] transition-transform duration-400 ${
            nav ? 'translate-y-[11px] rotate-[-45deg]' : ''
          }`}
        ></div>
        <div
          className={`w-[35px] h-[5px] bg-white my-[6px] transition-transform duration-400 ${
            nav ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-[35px] h-[5px] bg-white my-[6px] transition-transform duration-400 ${
            nav ? 'translate-y-[11px] rotate-[-45deg]' : ''
          }`}
        ></div>
      </div>
      {nav && (
        <div className="fixed w-full h-screen sm:hidden flex flex-col justify-center items-center z-[999]">
          <a href="#home" className="text-3xl py-4" onClick={handleClick}>
            Home
          </a>
          <a href="#about" className="text-3xl py-4" onClick={handleClick}>
            Home
          </a>
          <a href="#mission" className="text-3xl py-4" onClick={handleClick}>
            Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
