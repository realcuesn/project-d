import RightIcon from "../assets/right.svg";
import gsap from "gsap";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    gsap.to(".contact-use-prog-bar", {
      scrollTrigger: {},
      duration: 1,
      delay: 0.5,
      width: "100%",
    });

    gsap.to(".contact-use-pull-up", {
      scrollTrigger: {},
      duration: 1,
      delay: 0.5,
      y: 0,
    });
  }, []);

  return (
    <section
      id="contact-us"
      className=" w-full relative flex flex-col mt-24 px-6 lg:px-10 xl:px-14 overflow-hidden"
    >
      <div className="mt-10">
        <div className="overflow-clip">
          <p className="text-5xl lg:text-7xl font-semibold translate-y-[100%] contact-use-pull-up">
            Let's Start
          </p>
        </div>
        <div className="ml-40 duration-300 h-1 w-20 mt-1 md:hidden">
          <div className="h-full w-0 contact-use-prog-bar bg-gradient-to-r from-[#EA0029] to-[#D4145A]"></div>
        </div>
        <div className=" ml-32  duration-300 h-1 w-28 mt-1 hidden md:block lg:hidden">
          <div className="h-full w-0 contact-use-prog-bar bg-gradient-to-r from-[#EA0029] to-[#D4145A]"></div>
        </div>
        <div className=" ml-48  duration-300 h-1 w-40 mt-1 hidden lg:block ">
          <div className="h-full w-0 contact-use-prog-bar bg-gradient-to-r from-[#EA0029] to-[#D4145A]"></div>
        </div>
        <div className="overflow-clip">
          <p className="text-5xl lg:text-7xl font-semibold mt-3 translate-y-[100%] contact-use-pull-up py-4">
            Talking
          </p>
        </div>
      </div>
      <div className="mt-14">
        <input
          className="text-3xl w-full border-b-2 border-black outline-none pb-6 "
          type="text"
          placeholder="Start a project"
        />
        <div className="lg:flex justify-between items-center whitespace-nowrap lg:mb-10">
          <input
            className="text-3xl block mt-14 w-full lg:w-[90%] lg:mr-4 border-b-2 border-black pb-6 outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="text-3xl block mt-14 w-full lg:w-[90%] lg:ml-4 border-b-2 border-black pb-6 mb-10 lg:mb-0 outline-none"
            type="phone"
            placeholder="Phone No."
          />
        </div>
        <textarea
          className="h-72 w-full text-3xl border-b-2 outline-none border-black pb-6"
          placeholder="Tell us, We can Help you"
        ></textarea>
      </div>
      <img
        className=" h-8 lg:h-10 block ml-auto absolute bottom-4 md:bottom-4 lg:bottom-6 xl:bottom-10 right-6 lg:right-10 xl:right-14"
        src={RightIcon}
        alt=""
      />
    </section>
  );
};

export default Contact;
