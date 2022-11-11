import { Meta, Story } from '@storybook/react';
import { Hero, HeroProps } from './index';

export default {
  component: Hero,
  title: 'Shared/UI/Hero',
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});

Primary.args = { 
  image: "public/assets/src/images/homes.jpg",
  imageAlt: "",
  title: "We Make Finding That Dream Home A Breeze",
  subTitle: "Search for homes to buy or rent in your neaighborhood and see how easy it is with"
} as HeroProps;


