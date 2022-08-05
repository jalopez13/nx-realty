import { render } from '@testing-library/react';

import TopicButton from '.';

describe('TopicButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< TopicButton topicName="Next.js" />);
    expect(baseElement).toBeTruthy();
  });
});
