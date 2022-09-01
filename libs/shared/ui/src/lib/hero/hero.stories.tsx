import { Meta, Story } from '@storybook/react';
import { Hero, IHero } from '.';
import BackgroundImage from "../../../../assets/src/images/house.jpg";

export default {
  component: Hero,
  title: 'Shared/UI/Hero',
} as Meta;

const Template: Story<IHero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});

Primary.args = { content: <h1>Welcome</h1>, bgSrc: BackgroundImage } as IHero;