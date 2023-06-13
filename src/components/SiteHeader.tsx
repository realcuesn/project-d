import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import closeImage from "../assets/x.svg";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const SiteHeader = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const servicesRef = useRef<HTMLAnchorElement>(null);
  const teamRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLImageElement>(null);

  const [menuState, setMenuState] = useState<boolean>(false);
  useEffect(() => {
    gsap.to(logoRef.current, {
      duration: 1,
      y: 0,
    });

    gsap.to(aboutRef.current, {
      delay: 0.5,
      duration: 1,
      y: 0,
    });

    gsap.to(servicesRef.current, {
      delay: 0.9,
      duration: 1,
      y: 0,
    });

    gsap.to(teamRef.current, {
      delay: 1.3,
      duration: 1,
      y: 0,
    });

    gsap.to(contactRef.current, {
      delay: 1.8,
      duration: 1,
      y: 0,
    });
    gsap.to(menuRef.current, {
      delay: 1.8,
      duration: 1,
      y: 0,
    });

    return () => {};
  }, []);
  return (
    <>
      <header className="flex items-center justify-between w-screen overflow-clip h-24 sm:h-32 lg:h-40 px-6 lg:px-10 xl:px-14 absolute top-0 z-10">
        <div className="overflow-clip">
          <img
            ref={logoRef}
            className="h-4 sm:h-8 translate-y-[100%]"
            src={logo}
            alt=""
          />
        </div>

        <div className="hidden lg:flex items-center mr-8 overflow-clip">
          <a
            ref={aboutRef}
            href="#about"
            className="text-xl cursor-pointer font-semibold mx-10 translate-y-[100%]"
          >
            About
          </a>
          <a
            ref={servicesRef}
            href="#services"
            className="text-xl cursor-pointer font-semibold mx-10 translate-y-[100%]"
          >
            Our Services
          </a>
          <a
            ref={teamRef}
            href="#team"
            className="text-xl cursor-pointer font-semibold mx-10 translate-y-[100%]"
          >
            Team
          </a>
        </div>

        <div className="overflow-clip hidden lg:block">
          <a
            ref={contactRef}
            href="#contact-us"
            className="text-xl font-semibold mx-10 block translate-y-[100%]"
          >
            Contact Us
          </a>
        </div>

        <div className="overflow-clip block lg:hidden">
          <img
            onClick={() => setMenuState(true)}
            ref={menuRef}
            className="h-4 sm:h-6 block"
            src={hamburger}
            alt=""
          />
        </div>
      </header>

      {menuState && (
        <div className="h-screen w-screen flex flex-col justify-between z-40 fixed top-0 left-0 right-0 bottom-0 bg-white">
          <div className="min-w-full h-24 sm:h-32 lg:h-40 px-6 lg:px-10 xl:px-14 flex items-center justify-between">
            <div>
              <img ref={logoRef} className="h-4 sm:h-8" src={logo} alt="" />
            </div>

            <div onClick={() => setMenuState(false)} className="lg:hidden">
              <img
                onClick={() => setMenuState(false)}
                className="h-6 sm:h-6 block"
                src={closeImage}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col items-start text-left px-6 lg:px-10 xl:px-14">
            <a
              href="#about"
              onClick={() => setMenuState(false)}
              className="text-5xl font-semibold"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMenuState(false)}
              className="text-5xl font-semibold my-12"
            >
              Our Services
            </a>
            <a
              href="#team"
              onClick={() => setMenuState(false)}
              className="text-5xl font-semibold"
            >
              Team
            </a>
          </div>

          <div className="my-12 px-6 lg:px-10 xl:px-14">
            <a
              href="#contact-us"
              onClick={() => {
                setMenuState(false);
              }}
              className="text-5xl font-semibold "
            >
              Contact Us
            </a>
            <p className="bg-gradient-to-r from-[#EA0029] to-[#D4145A] h-1 w-32 rounded-full ml-28 mt-2 md:mt-4"></p>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
