import { useEffect, useRef } from "react";
import { useLottie } from "lottie-react";

import instagram from "../assets/lottie/instagram.json";

const Instagram = () => {
  const instagramRef = useRef<HTMLDivElement>(null);

  const style = {
    height: `100%`,
    width: `100%`,
  };

  const options = {
    animationData: instagram,
    loop: true,
  };
  const lottieObj = useLottie(options, style);

  useEffect(() => {
    lottieObj.goToAndStop(10, true);
    const handleScroll = (e: any) => {
      /*       console.log(lottieObj.getDuration(true)); */
      /* console.log(phoneRef.current); */
      const rect = instagramRef.current?.getBoundingClientRect();

      const height = rect!.height;
      const top = rect!.top;
      const difference = height - top;
      const diffPercent = (difference / height) * 50;
      /*  console.log(`diffP:${diffPercent}`); */
      const lottiePercent = (lottieObj.getDuration(true)! * diffPercent) / 100;

      /* console.log(
        `Total Frames ${lottieObj.getDuration(
          true
        )} && total percent${lottiePercent}`
      ); */
      if (diffPercent < 99 && diffPercent > 1)
        lottieObj.goToAndStop(lottiePercent, true);

      /*   console.log(diffPercent); */
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className=" h-[45vh] lg:h-screen flex justify-end w-full overflow-x-clip text-base sm:text-2xl lg:text-3xl 2xl:text-4xl">
      <div
        ref={instagramRef}
        className="h-5/5 w-5/5 md:4/5 md:4/5 2xl:h-4/5 2xl:w-4/5 mb-10 phone 2"
      >
        <>{lottieObj.View}</>
      </div>
    </section>
  );
};

export default Instagram;
