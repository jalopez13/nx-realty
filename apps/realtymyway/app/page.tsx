import { Hero } from "./components/hero";
import PropertyMosaic from "./components/property-mosaic";

const HomePage = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 238px)" }}>
      <Hero
        image="/assets/images/homes.jpg"
        imageAlt="Home Image"
        title="We Make Finding That Dream Home A Breeze"
        subTitle="Search homes for sell in your neaighborhood and see how
        easy it is with "
      />

      <PropertyMosaic />
    </div>
  );
};

export default HomePage;
