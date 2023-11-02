import { Meta } from "@storybook/react";
import { Input } from ".";

export default {
  title: "atoms/Input",
  component: Input,
} as Meta;

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "리액트공부하기",
  onChange: () => {
    console.log("onChange");
  },
};
