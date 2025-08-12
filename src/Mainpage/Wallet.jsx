import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Wallet = () => {
  return (
    <>
      <main className="bg-[#FAF7F2] sm:px-20 lg:w-[50%] w-screen  px-6 h-fit">
        <div className="flex justify-center pb-7 pt-2">
          <p className="text-xl   text-[#550509] font-bold">MY Wallet</p>
        </div>
        <div className="bg-white  text-[#550509]  justify-center rounded-lg   items-center flex gap-4 w-full sm:h-[250px] h-[180px] ">
          <div className="h-[80%]  font-bold rounded-lg  flex justify-center items-center w-[45%] bg-[#FAF7F2]">
            <div className="flex gap-1">
              <p className="pt-1 text-3xl">
                {" "}
                <CiCirclePlus />
              </p>
              <p className="pt-2">Add Money</p>
            </div>
          </div>
          <div className="h-[80%] rounded-lg flex justify-center items-center w-[45%] bg-[#FAF7F2]">
            <div className="flex gap-1 pt-2 font-bold ">
              <p className="text-2xl">
                <BsArrowUpRightCircle />
              </p>
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className=" w-[100%] flex   justify-center bg-[grey] h-[0.2px]"></div>
        </div>
        <div>
          <div className="flex justify-center pt-5">
            <p className="text-xl   text-[#550509] font-bold">
              Transaction History
            </p>
          </div>
          <div className="pt-5">
            <div className="bg-white justify-center items-center rounded-lg flex w-full sm:h-[300px] h-[150px]">
              <p className="text-[grey]">nothing yet</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Wallet;
