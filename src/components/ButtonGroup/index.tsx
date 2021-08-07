import React from "react";
import styled from "styled-components/macro";

const BaseButtonGroup = styled.div<{ margin?: string; vertical?: boolean }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin ?? "0 5px"};
  & > * {
    display: inline-flex !important;
  }
  & > :first-child {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  & > :last-child {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
  & > :not(:first-child):not(:last-child) {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-right: none;
  }
`;

export const ButtonGroup = ({ children, ...rest }: { children: React.ReactNode }) => {
  return <BaseButtonGroup {...rest}>{children}</BaseButtonGroup>;
};
