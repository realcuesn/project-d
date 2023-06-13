import Lottie from "lottie-react";
import logo from "../assets/lottie/logo.json";

const Hero = () => {
  return (
    <section className="h-[60vh] w-full min-w-full md:min-h-screen relative flex flex-col justify-around items-center">
      <Lottie
        className="h-4/5 w-4/5"
        animationData={logo}
        loop={false}
      ></Lottie>
    </section>
  );
};

export default Hero;
