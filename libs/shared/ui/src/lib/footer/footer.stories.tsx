import { Meta, Story } from '@storybook/react';
import { Footer } from '.';

export default {
  component: Footer,
  title: 'Shared/UI/Footer',
} as Meta;

const Template: Story = (args) => <footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};