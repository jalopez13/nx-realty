import { render } from '@testing-library/react';

import Card from '.';

describe('Card Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card title="Card Component" />);
    expect(baseElement).toBeTruthy();
  });
});
