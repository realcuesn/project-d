import { useState } from "react";
import logo from "../assets/logo.svg";
import downImage from "../assets/chevron-down.svg";
import rightImage from "../assets/chevron-right.svg";
import GlobalTip from "./GlobalTip";
import HarderTip from "./HarderTip";
import TalentTip from "./TalentTip";
import TechTip from "./TechTip";

const About = () => {
  const [globalState, setGlobalState] = useState(false);
  const [harderState, setHarderState] = useState(false);
  const [techState, setTechState] = useState(false);
  const [talentState, setTalentState] = useState(false);
  return (
    <section
      id="about"
      className="w-full overflow-hidden xl:flex justify-between items-start pt-20 px-6 lg:px-10 xl:px-14 select-none"
    >
      <div className="lg:mt-28">
        <p className="text-6xl font-bold xl:text-[9rem] md:-ml-6">Why</p>
        <p>
          <img
            className="h-8 mt-4 ml-2 md:-ml-2 xl:mt-14 xl:h-10"
            src={logo}
            alt=""
          />
        </p>
        <p className=" md:hidden h-1 w-28 bg-gradient-to-r mt-6 ml-36 from-[#EA0029] to-[#D4145A]"></p>
        <p className=" hidden md:block lg:hidden h-1 w-28 bg-gradient-to-r mt-6 ml-32 from-[#EA0029] to-[#D4145A]"></p>
        <p className="hidden xl:block h-1 w-36 bg-gradient-to-r mt-6 ml-36 from-[#EA0029] to-[#D4145A]"></p>
      </div>
      <div className="mt-20">
        <div className="mt-10 w-[100%] xl:w-[48rem] overflow-clip">
          <div className="flex w-full justify-between cursor-pointer items-center">
            <p
              onClick={() => setGlobalState(!globalState)}
              className="text-4xl font-semibold xl:text-6xl"
            >
              Global
            </p>
            {globalState && <img className="h-10" src={downImage} alt="" />}
            {!globalState && <img className="h-10" src={rightImage} alt="" />}
          </div>
          {globalState && <GlobalTip></GlobalTip>}
          <p className="w-full h-[2px] mt-10 bg-neutral-900"></p>
        </div>
        <div className="mt-10 w-[100%] xl:w-[48rem] overflow-clip">
          <div className="flex w-full justify-between cursor-pointer items-center">
            <p
              onClick={() => setHarderState(!harderState)}
              className="text-4xl font-semibold xl:text-6xl"
            >
              We Try Harder
            </p>
            {harderState && <img className="h-10" src={downImage} alt="" />}
            {!harderState && <img className="h-10" src={rightImage} alt="" />}
          </div>
          {harderState && <HarderTip></HarderTip>}
          <p className="w-full h-[2px] mt-10 bg-neutral-900"></p>
        </div>
        <div className="mt-10 w-[100%] xl:w-[48rem] overflow-clip">
          <div className="flex w-full whitespace-normal justify-between cursor-pointer items-center">
            <p
              onClick={() => setTechState(!techState)}
              className="text-4xl font-semibold xl:text-6xl"
            >
              Technology and Data
            </p>
            {techState && <img className="h-10" src={downImage} alt="" />}
            {!techState && <img className="h-10" src={rightImage} alt="" />}
          </div>
          {techState && <TechTip></TechTip>}
          <p className="w-full h-[2px] mt-10 bg-neutral-900"></p>
        </div>
        <div className="mt-10 w-[100%] xl:w-[48rem] overflow-clip">
          <div className="flex w-full justify-between cursor-pointer items-center">
            <p
              onClick={() => setTalentState(!talentState)}
              className="text-4xl font-semibold xl:text-6xl"
            >
              Talent
            </p>
            {talentState && <img className="h-10" src={downImage} alt="" />}
            {!talentState && <img className="h-10" src={rightImage} alt="" />}
          </div>
          {talentState && <TalentTip></TalentTip>}
          <p className="w-full h-[2px] mt-10 bg-neutral-900"></p>
        </div>
      </div>
    </section>
  );
};

export default About;
