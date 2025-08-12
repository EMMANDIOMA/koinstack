import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

const Television = () => {
  return (
    <div>
      <main className="bg-[#FAF7F2] w-screen sm:px-16  lg:px-96  px-6 h-screen">
        <div className=" flex flex-row pt-5 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Paybill"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl sm:pl-36 xl:pl-20 text-[#550509] font-bold">
            Television
          </div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
        <section>
          <div className="pt-14">
            <p>Select Provider</p>
          </div>
          <div className="flex flex-col pt-5 gap-3">
            <NavLink
              to={"/DSTV"}
              className="h-[70px] flex px-2  bg-white rounded-lg w-full"
            >
              <div className="flex py-2 gap-3">
                <img
                  className=" w-14 border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/DSTV.jpg"
                  alt=""
                />
                <p className="pt-3">DSTV</p>
              </div>
            </NavLink>
            <NavLink
              to={"/GOTV"}
              className="h-[70px] px-2 bg-white rounded-lg w-full"
            >
              <div className="flex py-2 gap-3">
                <img
                  className=" w-14 border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/GOTV.jpg"
                  alt=""
                />
                <p className="pt-3.5 ">GOTV</p>
              </div>
            </NavLink>
            <NavLink
              to={"/STARTIMES"}
              className="h-[70px] px-2 bg-white rounded-lg w-full"
            >
              <div className="flex py-2 gap-3">
                <img
                  className=" w-14 border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/STAR.jpg"
                  alt=""
                />
                <p className="pt-3.5 ">STARTIMES</p>
              </div>
            </NavLink>
            <NavLink
              to={"/Showmax"}
              className="h-[70px] px-2 bg-white rounded-lg w-full"
            >
              <div className="flex py-2 gap-3">
                <img
                  className=" w-14 border-[#8FEBFF] border-2 rounded-full"
                  src="src/images/showmax.jpg"
                  alt=""
                />
                <p className="pt-3.5 ">SHOWMAX</p>
              </div>
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Television;
