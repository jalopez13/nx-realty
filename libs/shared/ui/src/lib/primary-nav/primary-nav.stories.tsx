import { INavItems } from '@nx-realty/shared/types';
import { Meta, Story } from '@storybook/react';
import { PrimaryNav } from '.';
import { mockBaseComponentProps } from './primary-nav.mocks';

export default {
  component: PrimaryNav,
  title: 'Shared/UI/PrimaryNav',
} as Meta;

const Template: Story<INavItems> = (args) => <PrimaryNav {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockBaseComponentProps.base
} as INavItems;