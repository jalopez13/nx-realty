import { render } from '@testing-library/react';

import BaseLayout from '.';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BaseLayout>
        <div>
          <h1>BaseLayout Component</h1>
        </div>
      </BaseLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
