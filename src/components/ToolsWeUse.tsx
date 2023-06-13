import ToolsWeUseImage from "../assets/tools-we-use.svg";

const ToolsWeUse = () => {
  return (
    <section className="h-[60vh] w-screen lg:h-screen relative mt-20 lg:w-screen px-6 lg:px-28 2xl:flex justify-center lg:mt-40">
      <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold 2xl:-ml-[40%]">
        <p className=""> Tools We</p>
        <p className="h-1  bg-red-500 w-20 ml-44 mt-2 md:hidden"></p>
        <p className="h-1  bg-red-500 w-24 ml-52 mt-2 md:block hidden lg:hidden"></p>
        <p>Use</p>
      </div>
      <img
        src={ToolsWeUseImage}
        className="h-3/4 w-[90%] top-10 absolute md:top-20"
        alt=""
      />
    </section>
  );
};

export default ToolsWeUse;
