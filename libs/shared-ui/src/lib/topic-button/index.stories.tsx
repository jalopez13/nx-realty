import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopicButton  from './index';

export default {
  component: TopicButton,
  title: 'Shared-UI/Button', 
} as ComponentMeta<typeof TopicButton> ;

const Template: ComponentStory< typeof TopicButton > = (args) => <TopicButton {...args} />;

export const Primary = Template.bind({})

Primary.args = {
  topicName: "Next.JS"
}