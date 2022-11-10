export const Hero = () => {
  return (
    <section className="relative h-[800px] mb-4">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="/assets/images/house.jpg"
        alt="Couple on a bed with a dog"
      />

      <div className="sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-brand-dark/80 sm:to-transparent sm:dark:bg-gradient-to-r sm:dark:from-brand/60 sm:dark:to-transparent"></div>

      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-brand-light drop-shadow-md">
            We Make Finding That Dream Home A Breeze
          </h1>
          <p className="mb-8 text-lg font-normal text-brand-light/80  lg:text-xl sm:px-16 xl:px-48 dark:text-brand-light/90 italic">
            Search for homes to buy or rent in your neaighborhood and see how
            easy it is with
            <span className="text-white ml-2 font-bold shadow tracking-tight">
              RealtyMyWay
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
