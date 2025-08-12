import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const Betting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    name: "sporty",
    image: "/src/images/sporty.png",
  });
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const options = [
    { name: "1xbet", image: "/src/images/1xbet.jpg" },
    { name: "sporty", image: "/src/images/sporty.png" },
    { name: "Bet9ja", image: "/src/images/Bet9ja.png" },
    { name: "Betking", image: "/src/images/Betking.png" },

    { name: "Msport", image: "/src/images/Msport.png" },
  ];
  const [amount, setAmount] = useState("");
  const handleAmountclick = (value) => {
    setAmount(value);
  };
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };
  const filteredOptions = options.filter(
    (option) => option.name !== selectedOption.name
  );

  return (
    <>
      <main className="bg-[#FAF7F2] w-screen sm:px-48  lg:px-[410px] px-6 md:h-screen xl:h-[805px]">
        <div className=" flex flex-row pt-3 pb-1 gap-28">
          <div className="bg-white  flex justify-center text-xl pl-2 items-center h-[35px]  rounded-full w-[35px]">
            <NavLink to={"/Paybill"}>
              <MdArrowBackIos />
            </NavLink>
          </div>
          <div className="text-xl  xl:pl-19.5 md:pl-6  text-[#550509] font-bold">
            Betting
          </div>
        </div>
        <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
        <section className="pt-5">
          <div className="flex flex-col gap-4">
            <p className="font-medium">select provider</p>
            <div className="h-[60px] bg-[white]  flex  rounded-lg  flex-col w-full  ">
              <div onClick={toggleDropdown} className=" flex   ">
                <div className=" w-full px-2   rounded-lg ">
                  <div className="">
                    <div className="pt-3 px-2 pb-2 flex gap-5 ">
                      <img
                        className="w-8 rounded-full"
                        src={selectedOption.image}
                        alt={selectedOption.name}
                      />
                      <span className="pt-1">{selectedOption.name}</span>
                    </div>
                    {/* <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div> */}
                    {isOpen && (
                      <div className="pt-1 ">
                        {filteredOptions.map((option, index) => (
                          <div
                            className="pt-2"
                            key={index}
                            onClick={() => handleOptionClick(option)}
                          >
                            <div className="pl-3 py-2 flex gap-3">
                              <img
                                className="w-8 h-fit  rounded-full"
                                src={option.image}
                                alt={option.name}
                              />

                              <span>{option.name}</span>
                            </div>
                            <div className=" w-[100%] flex  justify-center bg-[grey] h-[0.2px]"></div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* <div className=" flex justify-end   ">
                    <FaCaretDown />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Amount */}
          <section className="pt-[280px]">
            <div className="flex flex-col gap-3">
              <p className="font-medium">User Id</p>
              <input
                className="py-2 px-2 w-full rounded-lg"
                type="text"
                placeholder="User Id"
              />
            </div>
            <div className="flex pt-3 gap-3 flex-col">
              <p className="font-medium">Amount</p>
              <div className="">
                <div className=" pb-3  gap-2 flex   ">
                  <div
                    onClick={() => handleAmountclick(100)}
                    className="h-[50px] rounded-lg w-[150px] bg-white"
                  >
                    <p className="text-3xl justify-center  pt-1  flex text-black">
                      <p className="pt-1 ">
                        <TbCurrencyNaira />
                      </p>
                      100
                    </p>
                  </div>
                  <div
                    onClick={() => handleAmountclick(200)}
                    className="h-[50px]  rounded-lg w-[150px] bg-white"
                  >
                    <p className="text-3xl justify-center  pt-1  flex text-black">
                      <p className="pt-1 ">
                        <TbCurrencyNaira />
                      </p>
                      200
                    </p>
                  </div>
                  <div
                    onClick={() => handleAmountclick(500)}
                    className="h-[50px] rounded-lg w-[150px] bg-white"
                  >
                    <p className="text-3xl justify-center  pt-1  flex text-black">
                      <p className="pt-1 ">
                        <TbCurrencyNaira />
                      </p>
                      500
                    </p>
                  </div>
                </div>
                <div className="flex pb-6 gap-4 justify-center">
                  <div
                    onClick={() => handleAmountclick(750)}
                    className="h-[50px] rounded-lg w-[150px] bg-white"
                  >
                    <p className="text-3xl justify-center  pt-1  flex text-black">
                      <p className="pt-1 ">
                        <TbCurrencyNaira />
                      </p>
                      750
                    </p>
                  </div>
                  <div
                    onClick={() => handleAmountclick(1000)}
                    className="h-[50px] rounded-lg w-[150px] bg-white"
                  >
                    {" "}
                    <p className="text-3xl justify-center  pt-1  flex text-black">
                      <p className="pt-1 ">
                        <TbCurrencyNaira />
                      </p>
                      1000
                    </p>
                  </div>
                  <div
                    onClick={() => handleAmountclick(2000)}
                    className="h-[50px] rounded-lg w-[150px] bg-white"
                  >
                    {" "}
                    <p className="text-3xl justify-center  pt-1  flex text-black">
                      <p className="pt-1 ">
                        <TbCurrencyNaira />
                      </p>
                      2000
                    </p>
                  </div>
                </div>
                <div className="pb-3">
                  <p className="py-3">Amount</p>
                  <div className=" h-[50px] flex    rounded-lg w-[100%] bg-white ">
                    <input
                      className="w-[100%] px-3  rounded-xl"
                      type="text"
                      placeholder="  0.00"
                      value={amount}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Betting;
