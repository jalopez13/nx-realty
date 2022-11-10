import { Hero } from '@nx-realty/shared/ui';
const HomePage = () => {
  return (
    <div className="h-screen text-white drop-shadow-lg">
      <Hero
        image="/assets/images/homes.jpg"
        imageAlt="Home Image"
        title="We Make Finding That Dream Home A Breeze"
        subTitle={`Search for homes to buy or rent in your neaighborhood and see how
        easy it is with RealtyMyWay`}
      />
    </div>
  );
};

export default HomePage;
