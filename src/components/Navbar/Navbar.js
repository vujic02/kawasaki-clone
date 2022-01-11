import React from "react";
import Logo from "./Logo";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BsCartFill,
  BsFillHandbagFill,
  BsFillSignpost2Fill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full bg-black flex flex-col">
      <div className="h-16 w-full flex items-center justify-between px-8 sm:px-16 xl:px-44">
        <div className="flex items-center ml-4 h-8 w-32 xl:h-8 xl:w-96 md:w-60 sm:h-8 sm:w-40">
          <Logo />
        </div>
        <div className="flex items-center">
          <a
            className="flex items-center h-4 text-sm text-light-gray transition-colors hover:text-white focus:text-white uppercase font-medium px-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            href="/"
          >
            <RiAccountCircleLine className="mr-1 text-kawasaki-green" />
            <span className="hidden 2xl:flex">My Kawasaki</span>
          </a>
          <a
            className="flex items-center h-4 text-sm text-light-gray transition-colors hover:text-white focus:text-white uppercase font-medium 2xl:border-r 2xl:border-l border-r-0 border-l-0 border-light-gray px-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            href="/"
          >
            <BsCartFill className="mr-1 text-kawasaki-green" />
            <span className="hidden 2xl:flex">Cart</span>
          </a>
          <a
            className="flex items-center h-4 text-sm text-light-gray transition-colors hover:text-white focus:text-white uppercase font-medium 2xl:border-r border-r-0 border-light-gray px-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            href="/"
          >
            <BsFillHandbagFill className="mr-1 text-kawasaki-green" />
            <span className="hidden 2xl:flex">Wishlist</span>
          </a>
          <a
            className="flex items-center h-4 text-sm text-light-gray transition-colors hover:text-white focus:text-white uppercase font-medium 2xl:border-r border-r-0 border-light-gray px-2"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            href="/"
          >
            <BsFillSignpost2Fill className="mr-1 text-kawasaki-green" />
            <span className="hidden 2xl:flex">Test Ride</span>
          </a>
          <a
            className="flex items-center h-4 text-sm text-light-gray transition-colors hover:text-white focus:text-white uppercase font-medium px-2 mr-2 2xl:mr-0"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            href="/"
          >
            <IoLocationSharp className="mr-0.5 text-kawasaki-green" />
            <span className="hidden 2xl:flex">Locate A Dealer</span>
          </a>
          <form className="flex items-center">
            <input
              className="h-8 w-auto outline-none border-none px-1.5 rounded bg-gray-500 focus:bg-white transition-colors text-sm font-normal"
              placeholder="Search"
            />
            <AiOutlineSearch className="w-6 h-6 ml-2 text-light-gray hover:text-white transition-colors cursor-pointer" />
          </form>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "24px",
          backgroundImage: "url('./images/green_lines.jpg')",
        }}
      ></div>
      <div
        style={{ height: "54px" }}
        className="w-full flex items-center justify-between px-8 sm:px-16 xl:px-44 border-b-2 border-kawasaki-green bg-dark-gray"
      >
        <div
          className="ml-4 flex h-full uppercase"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <div
            style={{ padding: "16px 13px" }}
            className="border-l border-light-gray text-white transition-colors hover:text-kawasaki-green focus:text-kawasaki-green font-medium cursor-pointer"
          >
            <span>Motorcycle</span>
          </div>
          <div
            style={{ padding: "16px 13px" }}
            className="border-l border-light-gray text-white transition-colors hover:text-kawasaki-green focus:text-kawasaki-green font-medium cursor-pointer"
          >
            <span>Atv</span>
          </div>
          <div
            style={{ padding: "16px 13px" }}
            className="border-l border-light-gray text-white transition-colors hover:text-kawasaki-green focus:text-kawasaki-green font-medium cursor-pointer"
          >
            <span>Side X Side</span>
          </div>
          <div
            style={{ padding: "16px 13px" }}
            className="border-l border-r border-light-gray text-white transition-colors hover:text-kawasaki-green focus:text-kawasaki-green font-medium cursor-pointer"
          >
            <span>WaterCraft</span>
          </div>
        </div>
        <div
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="flex h-full items-center uppercase"
        >
          <div
            style={{ padding: "16px 15px", fontSize: "13px" }}
            className="text-nav-gray hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Experience</span>
          </div>
          <div
            style={{ padding: "16px 15px", fontSize: "13px" }}
            className="text-nav-gray hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Government & Fleet</span>
          </div>
          <div
            style={{ padding: "16px 15px", fontSize: "13px" }}
            className="text-nav-gray hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Shop</span>
          </div>
          <div
            style={{ padding: "16px 15px", fontSize: "13px" }}
            className="text-nav-gray hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Owner Center</span>
          </div>
          <div
            style={{ padding: "16px 15px", fontSize: "13px" }}
            className="text-nav-gray hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Racing</span>
          </div>
          <div
            style={{ padding: "16px 15px", fontSize: "13px" }}
            className="text-nav-gray hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Research Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
