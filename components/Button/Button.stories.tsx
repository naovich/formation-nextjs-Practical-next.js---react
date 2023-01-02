import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

type ButtonProps = typeof Button;

export default {
  title: "Controls/Button",
  component: Button,
} as ComponentMeta<ButtonProps>;

const Template: ComponentStory<ButtonProps> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  children: "Button",
};
