import { Meta } from "@storybook/react";
import { ToDoList } from ".";

export default {
  title: "Templates/ToDoList",
  component: ToDoList,
} as Meta;

const Template = () => <ToDoList />;
export const Default = Template.bind({});
