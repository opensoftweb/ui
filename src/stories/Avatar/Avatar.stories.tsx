import React from "react";
import styled from "styled-components/macro";
import { Meta, Story } from "@storybook/react";
import { Avatar, IAvatar, AvatarGroup } from "../../components/Avatar";
import { AiOutlineUser } from "react-icons/ai";
import ImageUrl from "../assets/smiling-girl-300x300.jpg";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  & > div {
    margin: 0px 5px;
  }
`;

const Template: Story<IAvatar> = (args) => <Avatar {...args} />;

const LabelTemplate: Story<IAvatar> = () => {
  return (
    <>
      <Container>
        <h4>Label Avatars</h4>
        <Avatar xlarge>A</Avatar>
        <Avatar large>B</Avatar>
        <Avatar>C</Avatar>
      </Container>

      <Container>
        <h4>Rounded Label Avatars</h4>
        <Avatar xlarge rounded>
          D
        </Avatar>
        <Avatar large rounded>
          E
        </Avatar>
        <Avatar rounded>F</Avatar>
      </Container>

      <Container>
        <h4>Icon Avatars</h4>
        <Avatar xlarge>
          <AiOutlineUser size="3rem" />
        </Avatar>
        <Avatar large>
          <AiOutlineUser size="2rem" />
        </Avatar>
        <Avatar>
          <AiOutlineUser />
        </Avatar>
      </Container>

      <Container>
        <h4>Rounded Icon Avatars</h4>
        <Avatar xlarge rounded>
          <AiOutlineUser size="3rem" />
        </Avatar>
        <Avatar large rounded>
          <AiOutlineUser size="2rem" />
        </Avatar>
        <Avatar rounded>
          <AiOutlineUser />
        </Avatar>
      </Container>

      <Container>
        <h4>Rounded Image Avatars</h4>
        <Avatar xlarge rounded image={ImageUrl} imageAlt="John Doe" />
        <Avatar large rounded image={ImageUrl} imageAlt="John Doe" />
        <Avatar rounded image={ImageUrl} imageAlt="John Doe" />
      </Container>

      <Container>
        <h4>Avatar group</h4>
        <AvatarGroup>
          <Avatar xlarge rounded image={ImageUrl} imageAlt="John Doe" />
          <Avatar large rounded image={ImageUrl} imageAlt="John Doe" />
          <Avatar rounded image={ImageUrl} imageAlt="John Doe" />
          <Avatar rounded>+6</Avatar>
        </AvatarGroup>
      </Container>
    </>
  );
};

export const LabelAvatars = LabelTemplate.bind({});
export const LabelAvatar = Template.bind({});
export const LargeLabelAvatar = Template.bind({});
export const XLargeLabelAvatar = Template.bind({});

export const RoundedLabelAvatar = Template.bind({});
export const RoundedLargeLabelAvatar = Template.bind({});
export const RoundedXLargeLabelAvatar = Template.bind({});

LabelAvatar.args = {
  children: "OS",
};

LargeLabelAvatar.args = {
  children: "OS",
  large: true,
};

XLargeLabelAvatar.args = {
  children: "OS",
  xlarge: true,
};

RoundedLabelAvatar.args = {
  children: "OS",
  rounded: true,
};

RoundedLargeLabelAvatar.args = {
  children: "OS",
  large: true,
  rounded: true,
};

RoundedXLargeLabelAvatar.args = {
  children: "OS",
  xlarge: true,
  rounded: true,
};
