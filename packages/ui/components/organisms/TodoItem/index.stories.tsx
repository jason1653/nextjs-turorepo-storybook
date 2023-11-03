import { Meta } from "@storybook/react";
import { TodoItem } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "organisms/TodoItem",
  component: TodoItem,
} as Meta;

const Template = (args) => <TodoItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "리액트공부하기",
  onDelete: action("onDelete"),
};
