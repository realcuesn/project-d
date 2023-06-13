import gsap from "gsap";
import { useEffect, useRef } from "react";
const GlobalTip = () => {
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
      Global team to keep pace with the technology, leveraging learning &
      insights across globe.
    </p>
  );
};

export default GlobalTip;
