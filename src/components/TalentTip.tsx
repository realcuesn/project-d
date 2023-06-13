import gsap from "gsap";
import { useEffect, useRef } from "react";

const TalentTip = () => {
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
      Rare combination of planning + programmatic people : A team which has
      people from media planning background to add better consumer & market
      insights to a programmatic plan.
    </p>
  );
};

export default TalentTip;
