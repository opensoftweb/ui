import React from "react";
import { Meta, Story } from "@storybook/react";
import { BreadCrump, IBreadCrump } from "../../components/BreadCrump";

export default {
  title: "Components/BreadCrump",
  component: BreadCrump,
} as Meta;

const Template: Story<IBreadCrump> = (args) => <BreadCrump {...args} />;

export const Breadcrump = Template.bind({});

const menus = [
  {
    label: "User",
    url: "/user",
  },
  {
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    label: "Settings",
    url: "/settings",
  },
  {
    label: "Change password",
    url: "/password",
  },
];

Breadcrump.args = {
  menu: menus,
  home: "/home",
};
