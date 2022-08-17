import { render } from '@testing-library/react';

import BaseComponent from '.';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseComponent title="Base Component" />);
    expect(baseElement).toBeTruthy();
  });
});
