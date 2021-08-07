import React from "react";
import styled from "styled-components/macro";
import { darken } from "polished";
import { colors } from "../Theme";

export interface BaseButtonProps {
  type?: "button" | "submit" | "reset";
  wide?: string;
  full?: boolean;
  large?: boolean;
  minWidth?: string;
  maxWidth?: string;
  tall?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  background?: string;
  backColor?: string;
  borderWidth?: string;
  borderColor?: string;
  rounded?: string;
  squared?: boolean;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  size?: string;
  textAlign?: string;
  lineHeight?: string | number;
  color?: string;
  uppercase?: boolean;
  capitalize?: boolean;
  disabled?: boolean;
  hoverTextColor?: string;
  hoverBackColor?: string;
  hoverBorderColor?: string;
  boxShadow?: string;
  overflow?: string;
  whiteSpace?: string;
  flex?: string;
  opacity?: string;
  weight?: 400 | 500 | 600 | 700 | 800 | 900;
}

type ButtonThemes = Pick<
  BaseButtonProps,
  "color" | "backColor" | "borderColor" | "hoverBackColor" | "hoverBorderColor" | "hoverTextColor"
>;

const BaseButton = styled.button.attrs<BaseButtonProps>(({ type }) => ({
  type: type ?? "button",
}))<BaseButtonProps>`
  width: ${({ full, wide }) => (full ? "100%" : wide ? wide : "auto")};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ large, tall }) => (large ? "50px" : tall ? tall : "auto")};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding ?? "10px 15px"};
  margin: ${({ margin }) => margin ?? "0px"};
  background-color: ${({ backColor }) => (backColor ? backColor : "transparent")};
  border-width: ${({ large }) => (large ? "2px" : "1px")};
  border-style: solid;
  border-color: ${({ borderColor, backColor }) => (borderColor ? borderColor : backColor ? backColor : "transparent")};
  border-radius: ${({ rounded, squared }) => (rounded ? rounded : squared ? "0px" : "4px")};
  display: ${({ display }) => (display ? display : "flex")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "center")};
  font-size: ${({ size }) => (size ? size : "16px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1)};
  color: ${({ color }) => (color ? color : "#fff")};
  text-transform: ${({ capitalize, uppercase }) => (uppercase ? "uppercase" : capitalize ? "capitalize" : "none")};
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  box-shadow: ${({ boxShadow }) => boxShadow};
  overflow: ${({ overflow }) => overflow};
  flex: ${({ flex }) => flex};
  white-space: ${({ whiteSpace }) => whiteSpace};
  opacity: ${({ disabled, opacity }) => (disabled ? 0.5 : opacity ? opacity : 1)};

  &:hover {
    color: ${({ hoverTextColor, color }) => hoverTextColor ?? color};
    background-color: ${({ disabled, hoverBackColor }) =>
      disabled ? "none" : hoverBackColor ? hoverBackColor : "transparent"};
    border-color: ${({ disabled, hoverBorderColor }) =>
      disabled ? "none" : hoverBorderColor ? hoverBorderColor : "transparent"};
  }

  &:focus {
    outline: 0px;
  }
`;

const buttonThemes = (theme: string): ButtonThemes => {
  switch (theme) {
    case "primary":
      return {
        color: colors.white,
        backColor: colors.primary,
        borderColor: colors.primary,
        hoverBackColor: darken(0.1, colors.primary),
        hoverBorderColor: darken(0.1, colors.primary),
        hoverTextColor: colors.white,
      };

    case "secondary":
      return {
        color: colors.white,
        backColor: colors.secondary,
        borderColor: colors.secondary,
        hoverBackColor: darken(0.1, colors.secondary),
        hoverBorderColor: darken(0.1, colors.secondary),
        hoverTextColor: colors.white,
      };

    case "success":
      return {
        color: colors.white,
        backColor: colors.success,
        borderColor: colors.success,
        hoverBackColor: darken(0.1, colors.success),
        hoverBorderColor: darken(0.1, colors.success),
        hoverTextColor: colors.white,
      };

    case "info":
      return {
        color: colors.white,
        backColor: colors.info,
        borderColor: colors.info,
        hoverBackColor: darken(0.1, colors.info),
        hoverBorderColor: darken(0.1, colors.info),
        hoverTextColor: colors.white,
      };

    case "warning":
      return {
        color: colors.white,
        backColor: colors.warning,
        borderColor: colors.warning,
        hoverBackColor: darken(0.1, colors.warning),
        hoverBorderColor: darken(0.1, colors.warning),
        hoverTextColor: colors.white,
      };

    case "danger":
      return {
        color: colors.white,
        backColor: colors.danger,
        borderColor: colors.danger,
        hoverBackColor: darken(0.1, colors.danger),
        hoverBorderColor: darken(0.1, colors.danger),
        hoverTextColor: colors.white,
      };

    case "light":
      return {
        color: colors.white,
        backColor: colors.light,
        borderColor: colors.light,
        hoverBackColor: darken(0.1, colors.light),
        hoverBorderColor: darken(0.1, colors.light),
        hoverTextColor: colors.white,
      };

    case "dark":
      return {
        color: colors.white,
        backColor: colors.dark,
        borderColor: colors.dark,
        hoverBackColor: darken(0.1, colors.dark),
        hoverBorderColor: darken(0.1, colors.dark),
        hoverTextColor: colors.white,
      };

    case "outline-primary":
      return {
        color: colors.primary,
        backColor: colors.transparent,
        borderColor: colors.primary,
        hoverBackColor: colors.primary,
        hoverBorderColor: colors.primary,
        hoverTextColor: colors.white,
      };

    case "outline-secondary":
      return {
        color: colors.secondary,
        backColor: colors.transparent,
        borderColor: colors.secondary,
        hoverBackColor: colors.secondary,
        hoverBorderColor: colors.secondary,
        hoverTextColor: colors.white,
      };

    case "outline-success":
      return {
        color: colors.success,
        backColor: colors.transparent,
        borderColor: colors.success,
        hoverBackColor: colors.success,
        hoverBorderColor: colors.success,
        hoverTextColor: colors.white,
      };

    case "outline-info":
      return {
        color: colors.info,
        backColor: colors.transparent,
        borderColor: colors.info,
        hoverBackColor: colors.info,
        hoverBorderColor: colors.info,
        hoverTextColor: colors.white,
      };

    case "outline-warning":
      return {
        color: colors.warning,
        backColor: colors.transparent,
        borderColor: colors.warning,
        hoverBackColor: colors.warning,
        hoverBorderColor: colors.warning,
        hoverTextColor: colors.white,
      };

    case "outline-danger":
      return {
        color: colors.danger,
        backColor: colors.transparent,
        borderColor: colors.danger,
        hoverBackColor: colors.danger,
        hoverBorderColor: colors.danger,
        hoverTextColor: colors.white,
      };

    case "outline-light":
      return {
        color: colors.white,
        backColor: colors.transparent,
        borderColor: colors.light,
        hoverBackColor: colors.light,
        hoverBorderColor: colors.light,
        hoverTextColor: colors.dark,
      };

    case "outline-dark":
      return {
        color: colors.dark,
        backColor: colors.transparent,
        borderColor: colors.dark,
        hoverBackColor: colors.dark,
        hoverBorderColor: colors.dark,
        hoverTextColor: colors.white,
      };

    default:
      return {};
  }
};

export interface ButtonProps {
  theme: string;
  children: React.ReactNode;
}

export const Button = ({ theme, children, ...rest }: ButtonProps) => {
  const { color, backColor, borderColor, hoverBackColor, hoverBorderColor, hoverTextColor } = buttonThemes(theme);
  return (
    <BaseButton
      color={color}
      backColor={backColor}
      borderColor={borderColor}
      hoverBackColor={hoverBackColor}
      hoverBorderColor={hoverBorderColor}
      hoverTextColor={hoverTextColor}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
