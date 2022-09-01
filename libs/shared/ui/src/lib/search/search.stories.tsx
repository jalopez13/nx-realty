import { Meta, Story } from '@storybook/react';
import { ISearch, Search } from '.';
import { mockBaseComponentProps } from './search-mocks';

export default {
  component: Search,
  title: 'Shared/UI/Search',
} as Meta;

const Template: Story<ISearch> = (args) => <Search {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockBaseComponentProps.base
} as ISearch;