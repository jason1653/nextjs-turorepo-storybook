import { Meta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "organisms/Header",
  component: Header,
} as Meta;

const Template = () => <Header />;
export const Default = Template.bind({});
Default.args = {};
