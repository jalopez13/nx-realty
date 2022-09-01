import { render } from '@testing-library/react';

import Carousel from '.';

describe('Carousel Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Carousel title="Base Component" />);
    expect(baseElement).toBeTruthy();
  });
});
