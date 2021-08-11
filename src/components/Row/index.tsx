import styled from "styled-components/macro";
import media from "../Media";
import { AlignContent, IAlignContent } from "../AlignContent";
import { AlignItems, IAlignItems } from "../AlignItems";
import { AlignSelf, IAlignSelf } from "../AlignSelf";
import { JustifyContent, IJustifyContent } from "../JustifyContent";

const GutterX = 1.5;
const GutterY = 0;
const MeasuredUnit = "rem";

export interface IRow {
  alignContent?: IAlignContent;
  alignContentAtLeastMobile?: IAlignContent;
  alignContentAtLeastTablet?: IAlignContent;
  alignContentAtLeastLaptop?: IAlignContent;
  alignItems?: IAlignItems;
  alignItemsAtLeastMobile?: IAlignItems;
  alignItemsAtLeastTablet?: IAlignItems;
  alignItemsAtLeastLaptop?: IAlignItems;
  alignSelf?: IAlignSelf;
  alignSelfAtLeastMobile?: IAlignSelf;
  alignSelfAtLeastTablet?: IAlignSelf;
  alignSelfAtLeastLaptop?: IAlignSelf;
  justifyContent?: IJustifyContent;
  justifyContentAtLeastMobile?: IJustifyContent;
  justifyContentAtLeastTablet?: IJustifyContent;
  justifyContentAtLeastLaptop?: IJustifyContent;
}

export const Row = styled.div<IRow>`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${GutterY * -1 + MeasuredUnit};
  margin-right: ${GutterX / -2 + MeasuredUnit};
  margin-left: ${GutterX / -2 + MeasuredUnit};

  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: ${GutterX / 2 + MeasuredUnit};
    padding-left: ${GutterX / 2 + MeasuredUnit};
    margin-top: ${GutterY + MeasuredUnit};
  }
  ${({ alignContent }) => AlignContent[alignContent]};
  ${({ alignItems }) => AlignItems[alignItems]};
  ${({ alignSelf }) => AlignSelf[alignSelf]};
  ${({ justifyContent }) => JustifyContent[justifyContent]};

  ${media.atLeastTablet`
     ${({ alignItemsAtLeastTablet }) => AlignItems[alignItemsAtLeastTablet]};
      `};
  ${media.atLeastMobile`
    ${({ alignItemsAtLeastMobile }) => AlignItems[alignItemsAtLeastMobile]};
    `};
  ${media.atLeastLaptop`
    ${({ alignItemsAtLeastLaptop }) => AlignItems[alignItemsAtLeastLaptop]};
    `};
  ${media.atLeastTablet`
    ${({ justifyContentAtLeastTablet }) => JustifyContent[justifyContentAtLeastTablet]};
    `};
  ${media.atLeastLaptop`
    ${({ justifyContentAtLeastLaptop }) => JustifyContent[justifyContentAtLeastLaptop]};
    `};
`;
