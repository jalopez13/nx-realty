import Image from "next/image";

export type HeroProps = {
  image: string,
  imageAlt: string,
  title: string,
  subTitle: string,
};

export const Hero = ({ image, imageAlt, title, subTitle }: HeroProps) => {
  return (
    <section className="hero-section relative h-2/3 lg:h-2/3">
      <div>
        <Image
          className="absolute inset-0 object-cover hidden lg:inline-block"
          fill
          src={image}
          alt={imageAlt}
        />
      </div>

      <div
        className="absolute inset-0 bg-app-accent-secondary"
        style={{ opacity: "94%" }}
      ></div>

      <div className="container absolute inset-0 flex flex-col justify-center items-center text-7xl text-app-white z-20 p-8">
        <div className="container w-full font-semibold leading-none">
          <h2 className="max-w-6xl mx-auto text-5xl lg:text-5xl text-center leading-[3rem] lg:leading-none mb-4">
            {title}
          </h2>

          <h3 className="text-2xl text-center max-w-5xl mx-auto font-light leading-relaxed italic">
            {subTitle} <span className="font-bold not-italic">RealtyMyWay</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
