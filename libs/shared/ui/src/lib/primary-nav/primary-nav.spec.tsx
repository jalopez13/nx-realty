import { render } from '@testing-library/react';
import PrimaryNav from '.';
import { mockBaseComponentProps } from './primary-nav.mocks';

describe('PrimaryNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PrimaryNav navItems={mockBaseComponentProps.base.navItems} />
    );
    expect(baseElement).toBeTruthy();
  });
});
