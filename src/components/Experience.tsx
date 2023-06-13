import one from "../assets/team/1.svg";
import two from "../assets/team/2.svg";
import three from "../assets/team/3.svg";
import four from "../assets/team/4.svg";
import five from "../assets/team/5.svg";
import six from "../assets/team/6.svg";
import seven from "../assets/team/7.svg";
import eight from "../assets/team/8.svg";
import nine from "../assets/team/9.svg";
import ten from "../assets/team/10.svg";
import eleven from "../assets/team/11.svg";
import twelve from "../assets/team/12.svg";
import thirteen from "../assets/team/13.svg";
import fourteen from "../assets/team/14.svg";
import fiveteen from "../assets/team/15.svg";
import sixteen from "../assets/team/16.svg";
import seventeen from "../assets/team/17.svg";
import eightteen from "../assets/team/18.svg";
import nineteen from "../assets/team/19.svg";
import twenty from "../assets/team/20.svg";
import twentyone from "../assets/team/21.svg";
import twentytwo from "../assets/team/22.svg";
import gsap from "gsap";
import { useEffect } from "react";

import teamExperienceImage from "../assets/team-experience.svg";

const Experience = () => {
  useEffect(() => {
    gsap.to(".expeience-slide-up", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      stagger: 0.3,
      y: 0,
      delay: 0.5,
      duration: 1,
    });

    gsap.to(".experience-prog-bar", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      duration: 1,
      delay: 0.5,
      width: "100%",
    });
  });

  return (
    <section className="w-full px-6 lg:px-10 xl:px-14">
      <div className=" hidden lg:block w-full">
        <h3 className="text-7xl font-semibold mt-10">
          <div className="overflow-clip">
            <p className="expeience-slide-up translate-y-[100%]">Team</p>
          </div>
          <div className="overflow-clip">
            <p className="expeience-slide-up translate-y-[100%]">Experience</p>
          </div>
          <div className="duration-500 h-1  w-52  ml-40 rounded-full mt-10 ">
            <div className="h-full w-0 bg-red-500 experience-prog-bar"></div>
          </div>
        </h3>
        <img className="h-full w-full" src={teamExperienceImage} alt="" />
      </div>

      <div className="w-full lg:hidden">
        <h3 className="text-5xl font-semibold">
          <p>Team</p>
          <p>Experience</p>
          <div className=" duration-300 h-1 w-24 ml-40 mt-4 md:hidden ">
            <div className="h-1 w-full bg-red-500"></div>
          </div>
          <div className="hidden duration-300 h-1 w-36 ml-28 mt-4 lg:hidden md:block rounded-full ">
            <div className="h-1 w-full bg-red-500"></div>
          </div>
        </h3>

        <div className="flex items-center hide-scroll mt-20 select-none">
          <div className="team-banner-container flex items-center">
            <img className="h-16 min-h-[4rem] mx-10" src={one} alt="" />
            <img className="h-16 mx-10 " src={two} alt="" />
            <img className="h-16 mx-10 " src={three} alt="" />
            <img className="h-16 mx-10 " src={four} alt="" />
            <img className="h-16 mx-10 " src={five} alt="" />
            <img className="h-16 mx-10 " src={six} alt="" />
            <img className="h-16 mx-10 " src={seven} alt="" />
            <img className="h-16 mx-10 " src={eight} alt="" />
            <img className="h-16 mx-10 " src={nine} alt="" />
            <img className="h-16 mx-10 " src={ten} alt="" />
            <img className="h-16 mx-10 " src={eleven} alt="" />
            <img className="h-16 mx-10 " src={twelve} alt="" />
            <img className="h-16 mx-10 " src={thirteen} alt="" />
            <img className="h-16 mx-10 " src={fourteen} alt="" />
            <img className="h-16 mx-10 " src={fiveteen} alt="" />
            <img className="h-16 mx-10 " src={sixteen} alt="" />
            <img className="h-16 mx-10 " src={seventeen} alt="" />
            <img className="h-16 mx-10 " src={eightteen} alt="" />
            <img className="h-16 mx-10 " src={nineteen} alt="" />
            <img className="h-16 mx-10 " src={twenty} alt="" />
            <img className="h-16 mx-10 " src={twentyone} alt="" />
            <img className="h-16 mx-10 " src={twentytwo} alt="" />
          </div>
          <div className="team-banner-container flex items-center">
            <img className="h-16 min-h-[4rem] mx-10" src={one} alt="" />
            <img className="h-16 mx-10 " src={two} alt="" />
            <img className="h-16 mx-10 " src={three} alt="" />
            <img className="h-16 mx-10 " src={four} alt="" />
            <img className="h-16 mx-10 " src={five} alt="" />
            <img className="h-16 mx-10 " src={six} alt="" />
            <img className="h-16 mx-10 " src={seven} alt="" />
            <img className="h-16 mx-10 " src={eight} alt="" />
            <img className="h-16 mx-10 " src={nine} alt="" />
            <img className="h-16 mx-10 " src={ten} alt="" />
            <img className="h-16 mx-10 " src={eleven} alt="" />
            <img className="h-16 mx-10 " src={twelve} alt="" />
            <img className="h-16 mx-10 " src={thirteen} alt="" />
            <img className="h-16 mx-10 " src={fourteen} alt="" />
            <img className="h-16 mx-10 " src={fiveteen} alt="" />
            <img className="h-16 mx-10 " src={sixteen} alt="" />
            <img className="h-16 mx-10 " src={seventeen} alt="" />
            <img className="h-16 mx-10 " src={eightteen} alt="" />
            <img className="h-16 mx-10 " src={nineteen} alt="" />
            <img className="h-16 mx-10 " src={twenty} alt="" />
            <img className="h-16 mx-10 " src={twentyone} alt="" />
            <img className="h-16 mx-10 " src={twentytwo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
