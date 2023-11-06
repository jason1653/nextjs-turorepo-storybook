import { Meta } from "@storybook/react";
import { ToDoInput } from ".";

export default {
  title: "templates/ToDoInput",
  component: ToDoInput,
} as Meta;

const Template = () => <ToDoInput />;
export const Default = Template.bind({});
