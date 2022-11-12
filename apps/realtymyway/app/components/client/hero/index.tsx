import Image from "next/image";
import HUICombobox from "../headless-ui/combobox";
// import { Search } from "../search";

export type HeroProps = {
  image: string,
  imageAlt: string,
  title: string,
  subTitle: string,
};

export const Hero = ({ image, imageAlt, title, subTitle }: HeroProps) => {
  return (
    <section className="relative h-screen mb-4 bg-app-primary">
      <div>
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          fill
          src={image}
          alt={imageAlt}
        />
      </div>

      <div
        className="absolute inset-0 bg-app-primary"
        style={{ opacity: "90%" }}
      ></div>

      <div className="absolute w-full h-full flex flex-col justify-center items-center -mt-12">
        <div className="w-8/12 mb-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-brand-light typing-text mx-auto">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-brand-light/80 lg:text-2xl sm:px-16 xl:px-48 dark:text-brand-light/90 italic text-center">
            {subTitle} <strong className="text-secondary">RealtyMyWay.</strong>
          </p>
        </div>

        {/* <Search /> */}

        <HUICombobox />
      </div>
    </section>
  );
};

export default Hero;
