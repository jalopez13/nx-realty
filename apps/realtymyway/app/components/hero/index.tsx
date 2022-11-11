import Image from "next/image";
import { Search } from "../search";

export type HeroProps = {
  image: string,
  imageAlt: string,
  title: string,
  subTitle: string,
};

const styles = {
  image:
    "absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100",
  overlay: "absolute inset-0 bg-black/30",
  textBlock: "absolute w-full h-full flex flex-col justify-center items-center",
  titleText:
    "mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-brand-light drop-shadow-md",
  subTitleText:
    "mb-8 text-lg font-normal text-brand-light/80  lg:text-xl sm:px-16 xl:px-48 dark:text-brand-light/90 italic",
};

export const Hero = ({ image, imageAlt, title, subTitle }: HeroProps) => {
  return (
    <section className="relative h-screen mb-4 bg-green-700">
      <div>
        <Image className={styles.image} fill src={image} alt={imageAlt} />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.textBlock}>
        <div className="text-center bg-black/50 p-8 mb-8 rounded-md">
          <h1 className={styles.titleText}>{title}</h1>
          <p className={styles.subTitleText}>
            {subTitle} <strong className="text-green-600">RealtyMyWay.</strong>
          </p>
        </div>
        <Search />
      </div>
    </section>
  );
};

export default Hero;
