import gsap from "gsap";
import { useEffect } from "react";

const GreatStory = () => {
  useEffect(() => {
    gsap.to(".bring-up", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      duration: 1,
      stagger: 0.5,
      delay: 0.5,
      y: 0,
    });

    gsap.to(".prog-bar-story", {
      scrollTrigger: {
        toggleActions: "play reset play reset",
      },
      duration: 1,
      delay: 2.5,
      width: "100%",
    });
  }, []);

  return (
    <section className="px-6 lg:px-10 xl:px-14 text-base sm:text-2xl lg:text-3xl 2xl:text-4xl">
      <h4>
        <div className="overflow-clip">
          <div className="translate-y-[100%] bring-up">
            Some <span className="font-semibold">Great Story</span>
          </div>
        </div>
        <div className="overflow-clip">
          <div className="translate-y-[100%] bring-up">
            Written <span className="font-semibold">&</span>
          </div>
        </div>
      </h4>

      <h4 className="mt-5 lg:mt-10">
        <div className="overflow-clip">
          <div className="translate-y-[100%] bring-up">
            Some <span className="font-semibold">Creative</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="overflow-clip">
            <div className="translate-y-[100%] bring-up flex items-center">
              <span>Flex</span>
              <div className="h-1 ml-5 mt-1 w-40 rounded-md overflow-clip">
                <div className="h-full w-0 prog-bar-story bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>
      </h4>
    </section>
  );
};

export default GreatStory;
