import { Meta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "atoms/Button",
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "삭제",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "수정",
  color: "#304ffe",
  onclick: () => {
    console.log("수정");
  },
};
