import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { FaNairaSign } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
import { BiBulb } from "react-icons/bi";
import { IoFootballOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

function Home() {
  return (
    <>
      <main className="h-fit flex flex-col sm:px-20 gap-3  px-8 lg:w-[50%]   w-screen">
        <div className="py-3">
          <div className="h-[70px] flex    rounded-lg w-full">
            <div className="flex items-center    flex-row py-2 gap-4">
              <div className="flex gap-3">
                <img
                  className=" w-[50px] h-[50px] border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/profile.jpeg"
                  alt=""
                />
                <p className="pt-5 ">Hi, Chidera</p>
              </div>
              <div className="  pl-36 md:pl-[450px] xl:p-[350px] text-2xl text-[#550509]">
                <IoMdNotificationsOutline />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[90px] rounded-3xl bg-[#550509]     border-black border ">
          <div className="flex text-1xl text-white py-5 px-6 justify-between flex-row">
            <div>
              <div>Wallet balance</div>
              <div className="flex  gap-1">
                <p className="pt-1">
                  <FaNairaSign />
                </p>
                <p>0.00</p>
              </div>
            </div>
            <div className="text-[#BC6A0F] pb-4">
              <div className="flex gap-1">
                <p>History</p>
                <p className="pt-1">
                  <SlArrowDown />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[200px] pt-4 px-3  rounded-3xl bg-white ">
            <div className="flex flex-row justify-around gap-3">
              <div className="h-[40px] rounded-lg gap-2 flex w-[45%] justify-center items-center text-[#550509] bg-[#FAF7F5]">
                <NavLink className="flex gap-[5px]" to={"/Wallet"}>
                  <p className="pt-1">
                    <FaPlusCircle />
                  </p>

                  <p>Add money</p>
                </NavLink>
              </div>
              <div className="h-[40px] rounded-lg gap-2 flex w-[45%] justify-center items-center text-[#550509] bg-[#FAF7F5]">
                <NavLink className="flex gap-[5px]" to={"/Wallet"}>
                  <p className="pt-1">
                    <BsArrowUpRightCircleFill />
                  </p>

                  <p>Withdraw</p>
                </NavLink>
              </div>
            </div>
            <div className="pt-6  flex gap-5 px-2">
              <NavLink
                to={"/Airtime"}
                className="h-[60px] rounded-xl   py-2 flex flex-col items-center  bg-[#FAF7F5] w-[60%]"
              >
                <p className="text-[#80040B]">
                  <FaPhone />
                </p>
                <p className="text-[#80040B]">Airtime</p>
              </NavLink>
              <NavLink
                to={"/Data"}
                className="h-[60px] rounded-xl   py-2 flex flex-col items-center  bg-[#FAF7F5] w-[60%]"
              >
                <p className="text-[#80040B]">
                  <FaWifi />
                </p>
                <p className="text-[#80040B]">Data</p>
              </NavLink>
              <NavLink
                to={"/Electricity"}
                className="h-[60px] rounded-xl   py-2 flex flex-col items-center  bg-[#FAF7F5] w-[60%]"
              >
                <p className="text-[#80040B]">
                  <RiLightbulbFlashLine />
                </p>
                <p className="text-[#80040B]">Electricty</p>
              </NavLink>
              <NavLink
                to={"/Betting"}
                className="h-[60px] rounded-xl   py-2 flex flex-col items-center  bg-[#FAF7F5] w-[60%]"
              >
                <p className="text-[#80040B]">
                  <IoFootballOutline />
                </p>
                <p className="text-[#80040B]">Betting</p>
              </NavLink>
            </div>
            <div className="flex  pt-5 text-[#80040B]   ">
              <p className="bg-[#FAF7F5] rounded-xl flex justify-center h-[30px] w-[100%] ">
                show more
              </p>
            </div>
          </div>
          <div>
            <div className="pt-3">
              <p className="font-bold pb-4">Recent History</p>
            </div>
            <div className="flex pb-2  justify-center bg-[white] rounded-xl lg:h-[130px] sm:h-[400px]  h-[130px] w-[100%] items-center">
              <p>nothing yet</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
