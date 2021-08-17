import React from "react";
import { Meta, Story } from "@storybook/react";
import { BrickLoaders, ILoader } from "../../components/Loaders";

export default {
  title: "Components/Loaders",
  component: BrickLoaders,
} as Meta;

const Template: Story<ILoader> = (args) => <BrickLoaders {...args} />;

export const BrickLoader = Template.bind({});

BrickLoader.args = {
  text: "Please wait...",
};
