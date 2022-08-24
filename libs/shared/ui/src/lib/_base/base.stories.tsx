import { Meta, Story } from '@storybook/react';
import { BaseComponent, IBaseComponent } from '.';
import { mockBaseComponentProps } from './base-mocks';

export default {
  component: BaseComponent,
  title: 'Shared/UI/Button',
} as Meta;

const Template: Story<IBaseComponent> = (args) => <BaseComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockBaseComponentProps.base
} as IBaseComponent;