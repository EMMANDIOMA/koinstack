import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const STARTIMES = () => {
  return (
    <>
      <main className="bg-[#FAF7F2] sm:px-16  lg:px-96 w-screen  px-6 h-screen">
        <div className=" flex flex-row pt-5 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Television"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl sm:pl-36 xl:pl-20 text-[#550509] font-bold">
            STARTIMES
          </div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
        <section className="pt-16">
          <div className="flex flex-col gap-3">
            <p className="font-medium">provider</p>
            <NavLink className="h-[60px]  flex px-5  bg-white rounded-lg w-full">
              <div className="flex py-2 gap-3">
                <img
                  className=" w-[50px] h-[50px] border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/STAR.jpg"
                  alt=""
                />
                <p className="pt-3">STARTIMES</p>
              </div>
            </NavLink>
            <div className="pt-4 flex flex-col gap-4">
              <p className="font-medium">select package</p>
              <div className="w-full h-[60px]  flex px-5  bg-white rounded-lg ">
                <p className="text-[grey] pt-5">choose package</p>
                <div className=" fixed right-9 pt-5">
                  {/* <FaCaretDown /> */}
                </div>
              </div>
            </div>
            <div>
              <p className="py-2">Amount</p>
              <div className=" h-[60px] flex    rounded-lg w-[100%] bg-white ">
                <input
                  className="w-[100%]  rounded-xl"
                  type="text"
                  placeholder="  0.00"
                />
              </div>
            </div>
            <div className="font-medium pt-4 flex flex-col gap-3">
              <p>card Number</p>
              <div>
                <input
                  className="w-[100%] px-2 h-[50px] rounded-lg"
                  type="Number"
                  placeholder=" 0000 0000 0000"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default STARTIMES;
