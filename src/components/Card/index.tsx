import React from "react";
import styled from "styled-components/macro";
import { colors } from "../Theme/colors";

export interface ICard {
  wide?: string;
  tall?: string;
  color?: string;
  bg?: string;
  padding?: string;
  margin?: string;
  border?: string;
  rounded?: string;
}

export const Card = styled.div<ICard>`
  width: ${({ wide }) => wide ?? "100%"};
  height: ${({ tall }) => tall ?? "auto"};
  color: ${({ color }) => color ?? colors.dark};
  background-color: ${({ bg }) => bg ?? colors.white};
  padding: ${({ padding }) => padding ?? "15px"};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-radius: ${({ rounded }) => rounded ?? "4px"};
`;
