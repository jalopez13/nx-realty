import { render } from '@testing-library/react';

import HomePage from '.';

describe('TopicButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< HomePage  />);
    expect(baseElement).toBeTruthy();
  });
});
