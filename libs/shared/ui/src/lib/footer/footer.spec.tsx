import { render } from '@testing-library/react';

import { Footer } from '.';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
