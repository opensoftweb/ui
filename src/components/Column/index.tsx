import styled from "styled-components/macro";
import media from "../Media";
import { AlignItems, IAlignItems } from "../AlignItems";
import { Display, IDisplay } from "../Display";
import { JustifyContent, IJustifyContent } from "../JustifyContent";

export interface IColumn {
  alignItems?: IAlignItems;
  alignItemsMobileL?: IAlignItems;
  column?: string | number | boolean;
  columnAtLeastMobile?: string | number;
  columnAtLeastMobileL?: string | number;
  columnAtLeastTablet?: string | number;
  columnAtLeastTabletL?: string | number;
  columnAtLeastLaptop?: string | number;
  display?: IDisplay;
  justifyContent?: IJustifyContent;
  justifyContentAtLeastMobile?: IJustifyContent;
  justifyContentAtLeastMobileL?: IJustifyContent;
  justifyContentAtLeastTablet?: IJustifyContent;
  justifyContentAtLeastLaptop?: IJustifyContent;
  margin?: string;
  marginMobile?: string;
  marginTablet?: string;
  padding?: string;
}

const TotalColums = 12;
const OneColumn = 100 / TotalColums;
const FlexBasis = (col: any): string => {
  switch (col) {
    case true:
      return `
            flex: 0, 0 auto;
            `;
    case "auto":
      return `
            flex: 0, 0 auto;
            width: auto;
            `;
    default:
      return `
            flex: 0, 0, auto;
            width: ${OneColumn * col + "%"}
            `;
  }
};

export const Column = styled.div<IColumn>`
  position: relative;
  min-height: 1px;

  ${({ column }) => FlexBasis(column)};
  ${({ display }) => Display[display]};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${media.mobile`
  margin: ${({ marginMobile }) => marginMobile};
  `};

  ${media.atLeastMobile`
${({ columnAtLeastMobile }) => FlexBasis(columnAtLeastMobile)};
`};

  ${media.atLeastMobileL`
${({ columnAtLeastMobileL }) => FlexBasis(columnAtLeastMobileL)};
`};

  ${media.tablet`
 margin: ${({ marginTablet }) => marginTablet};
  `};

  ${media.atLeastTablet`
${({ columnAtLeastTablet }) => FlexBasis(columnAtLeastTablet)};
`};

  ${media.atLeastTabletL`
${({ columnAtLeastTabletL }) => FlexBasis(columnAtLeastTabletL)};
`};

  ${media.atLeastLaptop`
${({ columnAtLeastLaptop }) => FlexBasis(columnAtLeastLaptop)};
`};

  ${({ alignItems }) => AlignItems[alignItems]};

  ${({ justifyContent }) => JustifyContent[justifyContent]};

  ${media.mobileL`
  ${({ alignItemsMobileL }) => AlignItems[alignItemsMobileL]};
  `};

  ${media.atLeastMobile`
    ${({ justifyContentAtLeastMobile }) => JustifyContent[justifyContentAtLeastMobile]};
    `};

  ${media.atLeastMobileL`
    ${({ justifyContentAtLeastMobileL }) => JustifyContent[justifyContentAtLeastMobileL]};
    `};

  ${media.atLeastTablet`
    ${({ justifyContentAtLeastTablet }) => JustifyContent[justifyContentAtLeastTablet]};
    `};

  ${media.atLeastLaptop`
    ${({ justifyContentAtLeastLaptop }) => JustifyContent[justifyContentAtLeastLaptop]};
    `};
`;
