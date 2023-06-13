import { useEffect, useState } from "react";
import gsap from "gsap";
import ProgrammaticDropDown from "./ProgrammaticDropDown";
import SocialDropDown from "./SocialDropDown";
import StrategyDropDown from "./StrategyDropdown";

const SmallTip = () => {
  useEffect(() => {
    gsap.to(".small-tip-down", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      y: 0,
      delay: 0.5,
      duration: 1,
    });

    gsap.to(".small-tip-line-close", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      width: "26px",
      delay: 0.5,
      duration: 1,
    });
  }, []);

  const [strategy, setStrategy] = useState(false);
  const [programmatic, setProgrammatic] = useState(false);
  const [social, setSocial] = useState(false);
  return (
    <section id="services" className="flex justify-center w-full mb-20">
      <div className="w-full">
        <div className="w-full text-center">
          <h2
            className="text-5xl lg:text-8xl font-semibold cursor-pointer overflow-clip"
            onClick={() => setStrategy(!strategy)}
          >
            <div className="small-tip-down py-3 translate-y-[100%]">
              Strategy
            </div>
          </h2>

          {strategy && (
            <div className="overflow-clip">
              <StrategyDropDown></StrategyDropDown>
            </div>
          )}

          <p className="h-1 mt-10 w-8 rounded-md lg:w-60 mx-auto bg-red-500 small-tip-line-close"></p>
        </div>

        <div className="w-full text-center mt-10 sm:mt-14 lg:mt-20">
          <h2
            className="text-5xl lg:text-8xl font-semibold cursor-pointer overflow-clip"
            onClick={() => setProgrammatic(!programmatic)}
          >
            <div className="small-tip-down py-3 translate-y-[100%]">
              Programmatic
            </div>
          </h2>

          {programmatic && (
            <div className="overflow-clip">
              <ProgrammaticDropDown></ProgrammaticDropDown>
            </div>
          )}
          <p className="h-1 mt-10 w-8 rounded-md lg:w-60 mx-auto bg-red-500 small-tip-line-close"></p>
        </div>

        <div className="w-full text-center mt-10 sm:mt-14 lg:mt-20">
          <h2
            className="text-5xl lg:text-8xl font-semibold cursor-pointer overflow-clip"
            onClick={() => setSocial(!social)}
          >
            <div className="small-tip-down py-3 translate-y-[100%]">Social</div>
          </h2>
          {social && (
            <div className="overflow-clip">
              <SocialDropDown></SocialDropDown>
            </div>
          )}
          <p className="h-1 mt-10 w-8 rounded-md lg:w-60 mx-auto bg-red-500 small-tip-line-close"></p>
        </div>
      </div>
    </section>
  );
};

export default SmallTip;
