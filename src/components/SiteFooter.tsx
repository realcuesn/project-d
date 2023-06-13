const SiteFooter = () => {
  return (
    <section className="h-20 my-10 md:my-0 md:mt-10 flex flex-col  md:flex-row justify-between items-center px-6 lg:px-10 xl:px-14 w-full overflow-hidden">
      <div className="text-xs md:text-sm lg:text-base">
        © 2023 Project D. All Rights Reserved.
      </div>
      <div className="text-xs md:text-sm lg:text-base flex">
        <p className="mr-4">Privacy Policy</p>
        <p className="ml-4">Cookies Policies</p>
      </div>
    </section>
  );
};

export default SiteFooter;
