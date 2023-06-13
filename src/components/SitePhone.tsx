import { useEffect, useRef } from "react";
import { useLottie } from "lottie-react";

import phone from "../assets/lottie/phone.json";

const SitePhone = () => {
  const phoneRef = useRef<HTMLDivElement>(null);

  const style = {
    height: `100%`,
    width: `100%`,
  };

  const options = {
    animationData: phone,
    loop: true,
  };
  const lottieObj = useLottie(options, style);

  useEffect(() => {
    lottieObj.goToAndStop(70, true);

    const initialRectTop = phoneRef.current!.getBoundingClientRect().top;
    const handleScroll = (e: any) => {
      /*       console.log(lottieObj.getDuration(true)); */
      /* console.log(phoneRef.current); */

      const rectTop = phoneRef.current!.getBoundingClientRect().top;
      const inverse = initialRectTop - rectTop;
      const percent = (inverse / initialRectTop) * 100;

      const nPercent = lottieObj.getDuration(false)! * (percent / 100);
      lottieObj.goToAndStop(
        (nPercent / 100) * lottieObj.getDuration(false)! + 60,
        true
      );
      /*   console.log(nPercent); */
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className=" h-[45vh] lg:h-screen w-full overflow-x-clip">
      <div
        ref={phoneRef}
        className="h-5/5 w-5/5 md:4/5 md:4/5 2xl:h-4/5 2xl:w-4/5 mx-auto -mt-10 mb-10 phone md:-mt-32"
      >
        <>{lottieObj.View}</>
      </div>
    </section>
  );
};

export default SitePhone;
