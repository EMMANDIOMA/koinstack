import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

function Signup() {
  const [showpassword, setshowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const togglepasswordVisibility = () => {
    setshowpassword((prev) => !prev);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    console.log("Form submitted successfully!");
  };

  return (
    <>
      <main className="w-full min-h-screen     px-4 bg-[url('/images/Signup.svg')] bg-cover bg-center bg-no-repeat">
        <div className="py-3 px-5">
          <div className="bg-white h-[35px] rounded-full w-[35px]">
            <NavLink
              to={"/"}
              className="flex font-extrabold pt-1 justify-center"
            >
              <div className="text-2xl pl-2">
                <MdArrowBackIos />
              </div>
            </NavLink>
          </div>
        </div>

        <div className="text-white font-inter flex pb-3 flex-col justify-center items-center pt-[105px]">
          <p className="text-2xl font-bold">Create Account</p>
          <p className="pb-6">Lets get started</p>

          <div className="w-[95%] sm:w-[60%] h-fit rounded-3xl bg-gradient-to-r from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.6)]">
            <form onSubmit={handleSubmit}>
              <div className="flex px-4 py-3 flex-col">
                <div className="flex flex-col gap-2">
                  <label className="text-white" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex pt-2 flex-col gap-2">
                  <label className="text-white" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="flex pt-2 flex-col gap-2">
                  <label className="text-white" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="tel"
                    placeholder="Enter your phone no."
                  />
                </div>

                <div className="flex pt-2 flex-col gap-2">
                  <label className="text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="py-2 px-2 rounded-xl text-[grey]"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-full pt-2 gap-2">
                  <label className="text-white" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="py-2 px-2 rounded-xl w-full text-[grey]"
                      type={showpassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i
                      className={`bi ${
                        showpassword ? "bi-eye-slash" : "bi-eye"
                      } absolute right-4 text-black text-2xl font-bold cursor-pointer`}
                      onClick={togglepasswordVisibility}
                    ></i>
                  </div>
                </div>

                <div className="flex flex-col w-full pt-2 gap-2">
                  <label className="text-white" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <div className="relative pb-7">
                    <input
                      className="py-2 px-2 rounded-xl w-full text-[grey]"
                      type={showpassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <i
                      className={`bi ${
                        showpassword ? "bi-eye-slash" : "bi-eye"
                      } absolute right-4 text-black text-2xl font-bold cursor-pointer`}
                      onClick={togglepasswordVisibility}
                    ></i>
                  </div>
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-center font-bold">
                    {errorMessage}
                  </div>
                )}

                <NavLink
                  to={"/Home"}
                  type="submit"
                  className="text-white font-inter bg-[red] rounded-xl text-1xl flex items-center justify-center h-[40px] w-[100%]"
                >
                  Signup
                </NavLink>

                <div className="text-white flex gap-2 justify-center pt-8 font-inter font-bold sm:pt-14">
                  <p>I'm already a user.</p>
                  <NavLink to={"/Login"}>Login</NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
