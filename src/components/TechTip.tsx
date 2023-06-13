import gsap from "gsap";
import { useEffect, useRef } from "react";

const TechTip = () => {
  const sel = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const ctx = gsap.to(sel.current, {
      duration: 0.5,
      y: 0,
    });
    return () => {
      ctx.revert();
    };
  });
  return (
    <p
      ref={sel}
      className="w-full whitespace-normal duration-300 text-xl mt-10 text-neutral-500 xl:text-2xl translate-y-[100%]"
    >
      Comprehensive data partnerships and understanding the limitations of the
      data. Deeper understanding of the DSP and the marketing tech stack . Ideas
      on stretching the use of marketing technology platforms
    </p>
  );
};

export default TechTip;
