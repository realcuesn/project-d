import linkedin from "../assets/linkedin.svg";
import firstImage from "../assets/Photographs-01.png";
import secondImage from "../assets/Photographs-02.png";
import thirdImage from "../assets/Photographs-03.png";
import leftChev from "../assets/left.svg";
import rightChev from "../assets/right.svg";

const Team = () => {
  return (
    <>
      <section id="team" className="w-full overflow-hidden mt-40">
        <div className="mt-10 px-6 lg:px-10 xl:px-14">
          <p className="text-3xl lg:text-7xl font-semibold">Team Assemble</p>
          <p className="bg-gradient-to-r ml-40 from-[#EA0029] to-[#D4145A] h-0.5 w-16 mt-1 lg:h-1 lg:ml-[25.5rem] lg:w-32 "></p>
        </div>

        <div className="flex items-center lg:justify-center mt-10 overflow-x-scroll hide-scroll">
          <div className="h-96 ml-4 lg:m-0 md:h-[32rem] md:w-[24rem] md:min-w-[24rem] border-none  min-w-[18rem] w-72  relative rounded-2xl">
            <img
              className="h-full w-full rounded-2xl object-cover"
              src={firstImage}
              alt=""
            />
            <div className="absolute rounded-2xl top-0 h-full w-full bg-black bg-opacity-40 xl:opacity-0 xl:hover:opacity-100 flex flex-col justify-end pb-10 pl-8">
              <div className="text-4xl text-white font-bold">
                <p>Prajith</p>
                <p className="mt-2">Reddy</p>
              </div>
              <p className="bg-gradient-to-r  from-[#EA0029] to-[#D4145A] h-0.5 w-20 mt-2 ml-1 "></p>
              <p className="font-bold text-sm text-white mt-2">Co-Founder</p>

              <div className="flex justify-between items-center pr-8 mt-10">
                <p className="text-base text-white font-semibold ">
                  Marketing & Sales
                </p>
                <img className="h-6" src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="h-96 md:h-[32rem] md:w-[24rem] md:min-w-[24rem] min-w-[18rem] xl:mx-28 mx-6 w-72  relative rounded-2xl">
            <img
              className="h-full w-full rounded-2xl object-cover"
              src={secondImage}
              alt=""
            />
            <div className="absolute rounded-2xl top-0 h-full w-full bg-black  bg-opacity-40 xl:opacity-0 xl:hover:opacity-100 flex flex-col justify-end pb-10 pl-8">
              <div className="text-4xl text-white font-bold">
                <p>Preetham</p>
              </div>
              <p className="bg-gradient-to-r  from-[#EA0029] to-[#D4145A] h-0.5 w-20 mt-2 ml-1 "></p>
              <p className="font-bold text-sm text-white mt-2">Co-Founder</p>

              <div className="flex justify-between items-center pr-8 mt-10">
                <p className="text-base text-white font-semibold ">
                  Digital Marketing
                </p>
                <img className="h-6" src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="h-96 md:h-[32rem] md:w-[24rem] md:min-w-[24rem] min-w-[18rem] w-72  relative rounded-2xl">
            <img
              className="h-full w-full rounded-2xl object-cover"
              src={thirdImage}
              alt=""
            />
            <div className="absolute rounded-2xl top-0 h-full w-full bg-black bg-opacity-40 xl:opacity-0 xl:hover:opacity-100 flex flex-col justify-end pb-10 pl-8">
              <div className="text-4xl text-white font-bold">
                <p>Sai Teja</p>
              </div>
              <p className="bg-gradient-to-r  from-[#EA0029] to-[#D4145A] h-0.5 w-20 mt-2 ml-1 "></p>
              <p className="font-bold text-sm text-white mt-2">Co-Founder</p>

              <div className="flex justify-between items-center pr-8 mt-10">
                <p className="text-base text-white font-semibold ">
                  Data analytics <br /> & Sales(U.S.A)
                </p>
                <img className="h-6" src={linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-40 flex w-96 mx-auto items-center justify-center xl:hidden max-w-[100vw] overflow-hidden">
        <img src={leftChev} className="h-8 md:h-10" alt="" />
        <p className="text-lg md:text-2xl mx-5 text-neutral-400">
          <span className="font-bold">Swipe to </span> See
        </p>
        <img src={rightChev} className="h-8 md:h-10" alt="" />
      </section>
    </>
  );
};

export default Team;
