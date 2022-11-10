import { render } from '@testing-library/react';
import PrimaryNav from '.';

describe('PrimaryNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrimaryNav />);
    expect(baseElement).toBeTruthy();
  });
});
