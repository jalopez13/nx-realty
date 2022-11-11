import { Hero } from "./components";

const HomePage = () => {
  return (
    <div className="h-screen text-white drop-shadow-lg">
      <Hero
        image="/assets/images/homes.jpg"
        imageAlt="Home Image"
        title="We Make Finding That Dream Home A Breeze"
        subTitle="Search homes for sell in your neaighborhood and see how
        easy it is with "
      />
    </div>
  );
};

export default HomePage;
