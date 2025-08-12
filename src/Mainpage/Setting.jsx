import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdUnlock } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { LuMessageSquareQuote } from "react-icons/lu";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Setting = () => {
  return (
    <>
      <main className="px-6 bg-[#FAF7F2] h-fit sm:px-56  lg:px-[455px]   w-screen">
        <div>
          <div className="py-4 flex justify-center text-xl text-[#550509] font-bold">
            More
          </div>

          <div className="h-fit  flex px-4  bg-white rounded-lg w-full">
            <div className="flex  flex-row py-2 gap-4">
              <img
                className=" w-fit h-[60px] border-[#8FEBFF] border-2 rounded-full"
                src="src/images/MTN.jpg"
                alt=""
              />
              <div className="flex  pt-3 flex-col">
                <p className="font-semibold text-[#80040B]">Emmanuel chidera</p>
                <p className="text-[grey]">Wallet details</p>
              </div>
              <div>
                <div className="text-2xl text-[grey] pl-20 pt-6">
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          </div>
          <section className="pt-10 flex flex-col gap-5">
            <div className="h-fit pb-3  flex pl-2  bg-white rounded-lg w-full">
              <div className="px-3 pt-4">
                <p className="text-[grey]">Privacy/Settings</p>
                <div className="flex font-medium text-lg pt-4 gap-4 px-4  flex-col">
                  <div className=" justify-between items-center flex">
                    <p className=" text-2xl text-[#80040B] pt-[5px]">
                      <FaRegPenToSquare />
                    </p>
                    <p className="">Change personal Data</p>
                    <p className="pt-[5px] text-[grey]  ">
                      <MdArrowForwardIos />
                    </p>
                  </div>
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-14">
                      <p className="pt-[5px] text-xl text-[#80040B]">
                        <IoMdUnlock />
                      </p>
                      <p className="">Change password </p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                  <div className=" justify-between items-center flex">
                    <p className=" text-2xl text-[#80040B] pt-[5px]">
                      <TbGridDots />
                    </p>
                    <p className="">Set transaction pin</p>
                    <p className="pt-[5px]   text-[grey] ">
                      <MdArrowForwardIos />
                    </p>
                  </div>
                  <div className=" justify-between flex">
                    <p className="text-2xl text-[#80040B] pt-[5px]">
                      <TbGridDots />
                    </p>
                    <p className="">Reset transaction pin</p>
                    <p className="pt-[5px]  text-[grey] ">
                      <MdArrowForwardIos />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit  flex  pb-2 bg-white rounded-lg w-full">
              <div className="px-9 pt-4">
                <p className="text-[grey]">Support</p>
                <div className="flex font-medium text-lg pt-4 gap-5  flex-col">
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[70px]">
                      <p className="pt-[5px] text-xl text-[#80040B]">
                        <MdOutlineHeadsetMic />
                      </p>
                      <p className="">070-269-8248 </p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[46px]">
                      <p className="pt-[5px] text-2xl text-[#80040B]">
                        <FaEnvelopeOpenText />
                      </p>
                      <p className="">chidera@gmail.com </p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[66px]">
                      <p className="pt-[5px] text-2xl text-[#80040B]">
                        <LuMessageSquareQuote />
                      </p>
                      <p className="">Send feedback</p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[110px]">
                      <p className="pt-[5px] text-2xl text-[#80040B]">
                        <LuMessageCircleQuestion />
                      </p>
                      <p className="">FAQ</p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit  flex pl-2 pb-2 bg-white rounded-lg w-full">
              <div className="px-7 pt-4">
                <p className="text-[grey]">Socials</p>
                <div className="flex font-medium text-lg pt-4 gap-5  flex-col">
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[65px]">
                      <p className="pt-[5px] text-2xl text-[#80040B]">
                        <FaXTwitter />
                      </p>
                      <p className="">Koinstack_help</p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[63px]">
                      <p className="pt-[5px] text-2xl text-[#80040B]">
                        <FaInstagram />
                      </p>
                      <p className="">@Koinstack_ng</p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                  <div className=" justify-around  items-center flex">
                    <div className="flex gap-[85px]">
                      <p className="pt-[5px] text-2xl text-[#80040B]">
                        <FaFacebook />
                      </p>
                      <p className="">Koinstack</p>
                      <p className="pt-[5px]   text-[grey] ">
                        <MdArrowForwardIos />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-black flex gap-2 justify-center pt-10 font-inter font-bold sm:pt-20">
            <NavLink to={"/"}>Signout</NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Setting;
