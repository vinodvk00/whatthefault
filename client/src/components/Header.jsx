import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-primary text-white h-fit">
      <div className="flex items-center justify-between py-2">
        {/* LOGO and brand name */}
        <Link to="/" className="ml-16">
          <img src="./logo/logo.png" alt="wtf log" height="50px" width="50px" />
          {/* <span className="font-semibold">WTF</span> */}
        </Link>

        <div className="text-text">
          <ul className="flex items-center gap-12">
            <li className="hover:text-white">Resources</li>
            <li className="hover:text-white">Projects</li>
            <li className="hover:text-white">Community</li>
            <li className="hover:text-white">About</li>
          </ul>
        </div>

        <div className="">
          <button className="mr-16 bg-secondary text-black px-4 py-2 rounded-xl font-semibold">Sign Up</button>
        </div>
        
      </div>

      <div className="h-[1px] w-full bg-text"></div>
    </header>
  );
};

export default Header;
