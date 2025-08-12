import "./App.css";
import Welcome from "./LoginPage/Welcome page";
import Login from "./LoginPage/Login";
import Signup from "./LoginPage/Signup";
import Home from "./Mainpage/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Onboarding from "./OnboardingPage/Onboarding";
import Carousel from "./OnboardingPage/Carousel";
import Airtime from "./Bills/Airtime";
import Main from "./components/Main";
import Wallet from "./Mainpage/Wallet";
import Paybill from "./Mainpage/Paybill";
import Setting from "./Mainpage/Setting";
import Data from "./Bills/Data";
import Electricity from "./Bills/Electricity";
import EEDC from "./Bills/EEDC";
import Television from "./Bills/Television";
import Mtn from "./Bills/Mtn";
import Betting from "./Bills/Betting";
import Airtel from "./Bills/Airtel";
import Mobile9 from "./Bills/Mobile9";
import Glo from "./Bills/Glo";
import Apl from "./Bills/Apl";
import DSTV from "./Bills/DSTV";
import GOTV from "./Bills/GOTV";
import STARTIMES from "./Bills/STARTIMES";
import Showmax from "./Bills/Showmax";
function App() {
  // const location = useLocation();
  // const excludeRoutes = ["/", "/Login", "/Signup", "/Onboarding", "/Carousel"];
  // const showNavbar = !excludeRoutes.includes(location.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Airtime" element={<Airtime />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Electricity" element={<Electricity />} />
        <Route path="/EEDC" element={<EEDC />} />
        <Route path="/Television" element={<Television />} />
        <Route path="/Mtn" element={<Mtn />} />
        <Route path="/Betting" element={<Betting />} />
        <Route path="/Airtel" element={<Airtel />} />
        <Route path="/Glo" element={<Glo />} />
        <Route path="/Mobile9" element={<Mobile9 />} />
        <Route path="/Apl" element={<Apl />} />
        <Route path="/DSTV" element={<DSTV />} />
        <Route path="/GOTV" element={<GOTV />} />
        <Route path="/STARTIMES" element={<STARTIMES />} />
        <Route path="/Showmax" element={<Showmax />} />

        <Route element={<Main />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Paybill" element={<Paybill />} />
          <Route path="/Setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
