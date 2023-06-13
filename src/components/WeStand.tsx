import gsap from "gsap";
import { useEffect, useRef } from "react";

const WeStand = () => {
  const progressBar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(".standup-text", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      stagger: 0.3,
      y: 0,
      delay: 0.5,
      duration: 1,
    });

    gsap.to(progressBar.current, {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      duration: 1,
      delay: 0.5,
      width: "100%",
    });
  }, []);

  return (
    <section className="px-6 lg:px-10 xl:px-14 flex items-center mt-10 sm:mt-40 lg:mt-5 xl:mt-28 2xl:mt-2 mb-20 2xl:mb-40">
      <h3 className="text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold">
        <div className="overflow-clip">
          <span className="block standup-text translate-y-[100%]">We</span>
        </div>

        <div className="overflow-clip">
          <span className="block my-8 standup-text translate-y-[100%]">
            Stand
          </span>
        </div>

        <div className="overflow-clip">
          <span className="block standup-text translate-y-[100%]">Out</span>
        </div>
      </h3>

      <div className="mt-32 -ml-10 md:mt-0 md:ml-20 2xl:ml-60">
        <div className="h-1 mt-10 sm:mt-20 md:mt-0 md:w-[80%] 2xl:w-[65%] rounded-md overflow-clip">
          <div ref={progressBar} className="h-full w-0 bg-red-500"></div>
        </div>
        <p className="whitespace-nowrap text-base sm:text-2xl lg:text-3xl 2xl:text-4xl mt-2 lg:mt-4">
          We are Strategically Innovative,
          <br />
          Technically advanced, Globally
          <br />
          present and Socially active.
        </p>
      </div>
    </section>
  );
};

export default WeStand;
