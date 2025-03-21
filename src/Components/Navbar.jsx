import { useState } from 'react';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamBurger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHireMe = () => {
      window.open("https://linkedin.com/in/joshan-dev", "_blank");
  };

  return (
    <div className="nav-div shadow-lg text-center">
      <nav className="flex items-center justify-between px-4 py-3 max-w-[1536px] 2xl:m-auto relative">
        <div className="logo">
          <img className="w-36 h-auto invert" src={logo} alt="LOGO" />
        </div>
        <div className={`nav-list ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex items-center lg:justify-center gap-9 absolute lg:relative flex-col lg:flex-row right-0 top-[67px] lg:top-0 w-[40%] sm:w-[30%] lg:w-full h-fit lg:h-auto justify-start py-8 lg:p-0 shadow-lg lg:shadow-none bg-[#f4f4f4] z-50 lg:bg-white">
  <li className="nav-link-list">
    <Link to="/" className="nav-link">
      Home
    </Link>
  </li>
  <li className="nav-link-list">
    <Link to="/about" className="nav-link">
      About
    </Link>
  </li>
  <li className="nav-link-list">
    <Link to="/services" className="nav-link">
      Services
    </Link>
  </li>
  <li className="nav-link-list">
    <Link to="/skills" className="nav-link">
      Skills
    </Link>
  </li>
  <li className="nav-link-list">
    <Link to="/portfolio" className="nav-link">
      Portfolio
    </Link>
  </li>
  <li className="nav-link-list">
    <Link to="/contact" className="nav-link">
      Contact
    </Link>
  </li>
</ul>
        </div>
        <div className="nav-btn hidden lg:flex">
          <button onClick={handleHireMe} className="main-bg-color py-3 px-5 text-white hover:bg-black transition-all duration-300">
            Hire Me
          </button>
        </div>
        <div className="ham-burger space-y-1 hover:cursor-pointer lg:hidden" onClick={handleHamBurger}>
          <div className={`w-6 h-1 bg-black text-white ${isMenuOpen ? 'rotate-45' : ''} transform transition-all duration-300`}/>
          <div className={`w-6 h-1 bg-black text-white ${isMenuOpen ? 'opacity-0' : ''} transition-all duration-300`}/>
          <div className={`w-6 h-1 bg-black text-white ${isMenuOpen ? '-rotate-45' : ''} transform transition-all duration-300`}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;