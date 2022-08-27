import { render } from '@testing-library/react';

import Link from '.';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link href="/">Click Me</Link>);
    expect(baseElement).toBeTruthy();
  });
});
