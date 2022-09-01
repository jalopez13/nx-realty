import { render } from '@testing-library/react';

import Search from '.';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Search />);
    expect(baseElement).toBeTruthy();
  });
});
