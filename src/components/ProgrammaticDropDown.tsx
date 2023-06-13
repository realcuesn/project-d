import gsap from "gsap";
import { useEffect, useRef } from "react";

const ProgrammaticDropDown = () => {
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
      className="mt-10 text-lg lg:text-2xl font-semibold text-neutral-600 translate-y-[100%]"
    >
      Banner <span className="mx-2">|</span> Video
      <span className="mx-2">|</span> Audio Ads
      <span className="mx-2">|</span> Gmail
      <span className="mx-2">|</span> App Installs
      <span className="mx-2">|</span> OTT
    </p>
  );
};

export default ProgrammaticDropDown;
