import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
const Data = () => {
  return (
    <>
      <main className="bg-[#FAF7F2] sm:px-16  lg:px-96 w-screen  px-6 h-screen">
        <div className=" flex flex-row  pt-5 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Paybill"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl sm:pl-36 xl:pl-20  text-[#550509] font-bold">
            DATA
          </div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
        <section>
          <div className="pt-14">
            <p>Select Provider</p>
          </div>
          <div className="flex flex-col pt-5 gap-3">
            <NavLink
              to={"/Mtn"}
              className="h-[70px] flex px-2  bg-white rounded-lg w-full"
            >
              <div className="flex py-2 gap-3">
                <img
                  className=" w-[50px] h-[50px] border-[#8FEBFF] border-2 rounded-full"
                  src="/MTN.jpg"
                  alt=""
                />
                <p className="pt-3">MTN</p>
              </div>
            </NavLink>
            <NavLink
              to={"/Airtel"}
              className="h-[70px] px-2 bg-white rounded-lg w-full"
            >
              <div className="flex py-2 gap-3">
                <img
                  className=" w-[50px] h-[50px] border-[#8FEBFF] border-2 rounded-full"
                  src="/AIRTEL.jpg"
                  alt=""
                />
                <p className="pt-3.5 ">AIRTEL</p>
              </div>
            </NavLink>
            <NavLink
              to={"/Glo"}
              className="h-[70px] px-3 bg-white rounded-lg w-full"
            >
              <div className="flex py-3 gap-3">
                <img
                  className=" w-[50px] border-[#8FEBFF] border-2 rounded-full"
                  src="/Glo.jpg"
                  alt=""
                />
                <p className="pt-3 ">GLO</p>
              </div>
            </NavLink>
            <NavLink
              to={"/Mobile9"}
              className="h-[70px] px-3 bg-white rounded-lg w-full"
            >
              <div className="flex  py-4 gap-3">
                <img
                  className=" w-[50px] h-[50px]  border-[#8FEBFF] border-2 rounded-full"
                  src="/9mobile.jpg"
                  alt=""
                />
                <p className="pt-3 text-center ">9mobile</p>
              </div>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default Data;
