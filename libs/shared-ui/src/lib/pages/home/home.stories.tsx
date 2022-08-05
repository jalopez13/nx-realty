import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { HomePage } from "apps/realtymyway/pages/index"; 

export default {
  component: HomePage,
  title: 'Pages/Home', 
} as ComponentMeta<typeof HomePage> ;

const Template: ComponentStory< typeof HomePage > = (args) => <HomePage {...args} />;

export const Primary = Template.bind({})

Primary.args = {
  topicName: "Next.JS"
}