import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavigationBar = () => {
  return (
    <header className="fixed bg-[#4592AF] w-full py-[16px]">
        <nav className="flex justify-between items-center max-w-[1280px] m-auto px-[5%] 2xl:px-0">
            <Logo />
            <div className="flex gap-12">
              <NavLink 
                className={({isActive}) => isActive ? "font-poppins text-xs md:text-md lg:text-lg text-[#33313B] ease-in-out duration-500" : "font-poppins text-xs md:text-md lg:text-lg text-[#F6F5F5] hover:text-[#33313B] ease-in-out duration-500"} 
                to={"/about"}
              >
                About
              </NavLink>
              <NavLink 
                className={({isActive}) => isActive ? "font-poppins text-xs md:text-md lg:text-lg text-[#33313B] ease-in-out duration-500" : "font-poppins text-xs md:text-md lg:text-lg text-[#F6F5F5] hover:text-[#33313B] ease-in-out duration-500"} 
                to={"/contact"}
              >
                Contact
              </NavLink>
            </div>
        </nav>
    </header>
  )
}

export default NavigationBar