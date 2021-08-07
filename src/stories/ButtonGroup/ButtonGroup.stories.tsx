import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonGroup } from "../../components/ButtonGroup";
import { Button } from "../../components/Button";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
} as Meta;

const Template: Story = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button theme="primary">1</Button>
      <Button theme="secondary">2</Button>
      <Button theme="success">3</Button>
      <Button theme="danger">4</Button>
    </ButtonGroup>
  );
};

export const Basic = Template.bind({});
export const Vertical = Template.bind({});

Vertical.args = {
  vertical: true,
};
