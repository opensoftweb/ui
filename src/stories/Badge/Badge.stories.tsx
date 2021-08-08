import React from "react";
import { Meta, Story } from "@storybook/react";
import styled from "styled-components/macro";
import { MdEmail } from "react-icons/md";
import { Badge, IBadge } from "../../components/Badge";

const Icon = styled.div`
  position: relative;
  width: 60px;
  height: auto;
`;

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta;

const Template: Story<IBadge> = (args) => <Badge {...args} />;

const Positioned: Story<IBadge> = (args) => {
  return (
    <Icon>
      <MdEmail color="blue" size="60px" />
      <Badge {...args} />
    </Icon>
  );
};

export const PositionedBadge = Positioned.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Danger = Template.bind({});
export const Rounded = Template.bind({});
export const RoundedPill = Template.bind({});

PositionedBadge.args = {
  bg: "red",
  position: "top-right",
  dot: true,
  children: "",
};

Secondary.args = {
  bg: "gray",
  children: "secondary",
};

Success.args = {
  bg: "green",
  children: "success",
};

Info.args = {
  bg: "yellow",
  children: "secondary",
};

Danger.args = {
  bg: "red",
  children: "danger",
};

Rounded.args = {
  bg: "green",
  children: "2",
  rounded: true,
  size: "20px",
};

RoundedPill.args = {
  bg: "blue",
  children: "rounded pill",
  pill: true,
};
