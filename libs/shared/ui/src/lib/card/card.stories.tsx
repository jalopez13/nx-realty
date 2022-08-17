import { Meta, Story } from '@storybook/react';
import { Card, ICard } from '.';
import { mockCardProps } from './card-mocks';

export default {
  component: Card,
  title: 'Shared/UI/Card',
} as Meta;

const Template: Story<ICard> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockCardProps.base
} as ICard;