import { Meta, Story, StoryObj } from "@storybook/react";
import { AppTitle } from "ui/components/atoms/AppTitle";

export default {
  title: "atoms/AppTitle",
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: "Header background color",
      values: [{ name: "Header background color", value: "#304ffe" }],
    },
  },
} as Meta;

const Template: Story = () => <AppTitle />;

export const Default = Template.bind({});
Default.args = {};
