import gsap from "gsap";
import { useEffect, useRef } from "react";

const HarderTip = () => {
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
      We fewer clients on board , we focus more on our clients .In order to
      become a trusted partner and deliver high ROI, we give more time &
      attention.
    </p>
  );
};

export default HarderTip;
