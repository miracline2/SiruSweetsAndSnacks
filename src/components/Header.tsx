import logo from '../assets/Logo.png';
import NavbarDetails from './NavbarDetails';
import menuIcon from '../assets/Icons/menu.svg';

const Header = () => {
  return (
    <div className="flex bg-[#F0E68C] justify-between w-full h-20 fixed px-6 items-center">
      <img src={logo} alt="logo" className="w-15 h-15 md:w-20 md:h-20" />

      {/* Show NavbarDetails only on medium screens and above */}
      <div className="hidden md:block">
        <NavbarDetails />
      </div>

      {/* Show menu icon only on small screens */}
      <div className="block md:hidden">
        <img src={menuIcon} alt="menu" className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
