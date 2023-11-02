import { Meta } from "@storybook/react";
import { PageTitle } from ".";

export default {
  title: "atoms/PageTitle",
  component: PageTitle,
} as Meta;

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Page Title",
};
