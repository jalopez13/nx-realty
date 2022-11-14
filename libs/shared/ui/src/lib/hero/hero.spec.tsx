import { render } from '@testing-library/react';

import Hero from './index';

describe('Hero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Hero
        image="./assets/images/homes/jpg"
        imageAlt={'houses image'}
        title="Find your dream home now"
        subTitle="We can help find out how."
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
