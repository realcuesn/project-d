import gsap from "gsap";
import { useEffect, useRef } from "react";

const SocialDropDown = () => {
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
      Facebook
      <span className="mx-2">|</span> Instagram
      <span className="mx-2">|</span> Linkedin
      <span className="mx-2">|</span> Youtube
      <span className="mx-2">|</span> Twitter
      <span className="mx-2">|</span>
      Innovation Inventory
    </p>
  );
};

export default SocialDropDown;
