import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, BaseButtonProps } from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps & BaseButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
export const Light = Template.bind({});
export const Dark = Template.bind({});
export const OutlinePrimary = Template.bind({});
export const OutlineSecondary = Template.bind({});
export const OutlineSuccess = Template.bind({});
export const OutlineInfo = Template.bind({});
export const OutlineWarning = Template.bind({});
export const OutlineDanger = Template.bind({});
export const OutlineLight = Template.bind({});
export const OutlineDark = Template.bind({});

Primary.args = {
  theme: "primary",
  full: false,
  large: false,
  squared: false,
  uppercase: false,
  capitalize: false,
  disabled: false,
  children: "Button",
};

Secondary.args = {
  theme: "secondary",
  children: "Button",
};

Success.args = {
  theme: "success",
  children: "Button",
};

Info.args = {
  theme: "info",
  children: "Button",
};

Warning.args = {
  theme: "warning",
  children: "Button",
};

Danger.args = {
  theme: "danger",
  children: "Button",
};

Light.args = {
  theme: "light",
  children: "Button",
};

Dark.args = {
  theme: "dark",
  children: "Button",
};

OutlinePrimary.args = {
  theme: "outline-primary",
  full: false,
  large: false,
  squared: false,
  uppercase: false,
  capitalize: false,
  disabled: false,
  children: "Button",
};

OutlineSecondary.args = {
  theme: "outline-secondary",
  children: "Button",
};

OutlineSuccess.args = {
  theme: "outline-success",
  children: "Button",
};

OutlineInfo.args = {
  theme: "outline-info",
  children: "Button",
};

OutlineWarning.args = {
  theme: "outline-warning",
  children: "Button",
};

OutlineDanger.args = {
  theme: "outline-danger",
  children: "Button",
};

OutlineLight.args = {
  theme: "outline-light",
  children: "Button",
};

OutlineDark.args = {
  theme: "outline-dark",
  children: "Button",
};
