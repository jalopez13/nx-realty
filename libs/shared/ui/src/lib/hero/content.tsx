import { ReactElement } from 'react';

export interface IBaseComponent {
  content: ReactElement;
}

export const Content = ({ content }: IBaseComponent) => {
  return (
    <>
      <h1>Find Your Dream Home, We Can Help!</h1>
      <p>We make the dream happen... How? Who know!</p>
    </>
  );
};

export default Content;
