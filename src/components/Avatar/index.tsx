import React from "react";
import styled from "styled-components/macro";
import { colors } from "../../components/Theme/colors";

export interface IAvatar {
  image?: string;
  imageAlt?: string;
  rounded?: boolean;
  large?: boolean;
  xlarge?: boolean;
  children?: React.ReactNode;
  bg?: string;
  color?: string;
}

type BaseAvatarProps = Omit<IAvatar, "image" | "children" | "imageAlt">;

const BaseAvatar = styled.div<BaseAvatarProps>`
  width: ${({ large, xlarge }) => (large ? "3rem" : xlarge ? "4rem" : "2rem")};
  height: ${({ large, xlarge }) => (large ? "3rem" : xlarge ? "4rem" : "2rem")};
  background-color: ${({ bg }) => bg ?? colors.primary};
  color: ${({ color }) => color ?? colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "4px")};
  font-size: 1rem;
  position: relative;
  overflow: hidden;
`;

const BaseAvatarGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > :nth-child(n + 2) {
    margin-left: -1rem;
    border: 2px solid #fff;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Avatar = (props: IAvatar) => {
  const { image, imageAlt, children, ...rest } = props;

  return (
    <BaseAvatar {...rest}>
      {image && <AvatarImage src={image} alt={imageAlt} />}
      {children}
    </BaseAvatar>
  );
};

export const AvatarGroup = ({ children }: { children: React.ReactNode }) => (
  <BaseAvatarGroup>{children}</BaseAvatarGroup>
);
