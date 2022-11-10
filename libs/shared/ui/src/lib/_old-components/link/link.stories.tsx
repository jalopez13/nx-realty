import { ILink } from '@nx-realty/shared/types';
import { Meta, Story } from '@storybook/react';
import { Link } from '.';

export default {
  component: Link,
  title: 'Shared/UI/Link',
} as Meta;

const Template: Story<ILink> = (args) => <Link {...args}>Learn More</Link>;

export const Primary = Template.bind({});

Primary.args = {
  href: "/"
} as ILink;