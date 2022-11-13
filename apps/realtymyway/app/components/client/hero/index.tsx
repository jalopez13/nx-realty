import Image from "next/image";
import HUICombobox from "../headless-ui/combobox";

export type HeroProps = {
  image: string,
  imageAlt: string,
  title: string,
  subTitle: string,
};

export const Hero = ({ image, imageAlt, title, subTitle }: HeroProps) => {
  return (
    <section className="relative h-auto lg:h-2/3">
      <div>
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          fill
          src={image}
          alt={imageAlt}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full text-7xl text-app-white z-20 px-6 py-4">
        <div className="container w-full font-semibold leading-none">
          <h2 className="max-w-6xl mx-auto text-5xl lg:text-5xl text-center leading-[3rem] lg:leading-none mb-4">
            {title}
          </h2>

          <h3 className="text-2xl text-center max-w-5xl mx-auto font-light leading-relaxed italic">
            {subTitle} <span className="font-bold not-italic">RealtyMyWay</span>
          </h3>
        </div>

        <HUICombobox />
      </div>

      <div
        className="absolute inset-0 bg-app-accent-secondary"
        style={{ opacity: "94%" }}
      ></div>
    </section>
  );
};

export default Hero;
