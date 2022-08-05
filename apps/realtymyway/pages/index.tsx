import Image from 'next/image';

/* eslint-disable-next-line */
// export interface HomePageProps {
// }

export const HomePage = (props) => {
  return (
    <div>
      <h1>HomePage</h1>
      <Image src="/next.js.svg" width={64} height={64} alt="" />
    </div>
  );
};


export default HomePage;

