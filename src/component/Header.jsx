import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsStars, BsList, BsX } from 'react-icons/bs';
import logo from "./../assets/newPexlogo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <header className="text-white body-font bg-[#183563] sm:px-8 px-1">
  <div className="container mx-auto flex flex-wrap sm:p-2 px-5 pt-3 pb-0 justify-between items-start md:flex-row sm:items-center">
    <Link to="/" className="flex title-font font-medium items-center mb-2 md:mb-0">
      {/* change the logo here */}
      <img src={logo} alt="Logo" className="h-10 w-auto" />
    </Link>
    <nav className={`relative left-[-170px] md:ml-auto flex sm:flex-row flex-col sm:mt-1 mt-10  flex-wrap items-start text-base justify-center md:flex-row transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden md:opacity-100 md:flex'}`}>
      <Link to="/" className="mr-3 cursor-pointer sm:mb-0 mb-3  beviet ">About Us</Link>
      <Link to="/" className="mr-3 cursor-pointer sm:mb-0 mb-3 beviet ">Builder Forum</Link>
      <Link to="/" className="mr-3 cursor-pointer sm:mb-0 mb-3 beviet ">Contact us</Link>
    </nav>
    <button className="inline-flex md:hidden items-center text-[#233B76] bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base  md:mt-0" onClick={toggleMenu}>
      {isOpen ? <BsX /> : <BsList />}
    </button>
    <button className={`hidden beviet md:inline-flex items-center text-[#233B76] bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-3 md:mt-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
      <BsStars /> Register
    </button>
  </div>
</header>

  );
};

export default Header;
