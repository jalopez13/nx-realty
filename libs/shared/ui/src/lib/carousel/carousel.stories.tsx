import { Meta, Story } from '@storybook/react';
import { Carousel, ICarousel } from '.';
import { mockBaseComponentProps } from './carousel-mocks';

export default {
  component: Carousel,
  title: 'Shared/UI/Carousel',
} as Meta;

const Template: Story<ICarousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockBaseComponentProps.base
} as ICarousel;