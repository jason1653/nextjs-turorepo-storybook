import { Meta } from "@storybook/react";
import { Label } from ".";

export default {
  title: "atoms/Label",
  component: Label,
} as Meta;

const Template = (args) => <Label {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "리액트공부하기",
};
