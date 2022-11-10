import { Meta, Story } from '@storybook/react';
import { BaseLayout, IBaseLayout } from '.';

export default {
  component: BaseLayout,
  title: 'Shared/Layouts/BaseLayout',
} as Meta;

const Template: Story<IBaseLayout> = (args) => <BaseLayout {...args} />;

export const Primary = Template.bind({});

Primary.args = {} as IBaseLayout;