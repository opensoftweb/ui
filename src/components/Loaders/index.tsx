import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { getValueAndUnit } from "polished";

export interface ILoader {
  overlayBg?: string;
  size?: string;
  bg?: string;
  fontSize?: string;
  color?: string;
  text?: React.ReactNode;
}

const generateSize = (size: string) => {
  const num = getValueAndUnit(size)[0];
  const unit = getValueAndUnit(size)[1];
  const newSize = num / 2;

  return newSize + unit;
};

const LargeBlockAnim = keyframes`
    0% {
        transform: scale(1);
    }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
`;

const TwoSmallBrickAnim = keyframes`
    0% {
        transform: translateY(-50px);
    }
  25% {
    transform: translate(0);
  }
  100% {
    transform: translate(0);
  }
`;

const ThreeSmallBrickAnim = keyframes`
 0% {
    transform: translateY(-50px);
  }
  50% {
    transform: translate(0);
  }
  100% {
    transform: translate(0);
  }
`;

const FourSmallBrickAnim = keyframes`
0% {
    transform: translateY(-50px);
  }
  75% {
    transform: translate(0);
  }
  100% {
    transform: translate(0);
  }
`;

const OverLay = styled.div<Pick<ILoader, "overlayBg">>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  background-color: ${({ overlayBg }) => overlayBg ?? "rgba(0, 0, 0, 0.8)"};
  z-index: 999;
`;

const Contents = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
`;

const LargestBlock = styled.div<Pick<ILoader, "size">>`
  width: ${({ size }) => size ?? "40px"};
  height: ${({ size }) => size ?? "40px"};
  position: relative;
  display: inline-block;
  transform-origin: bottom left;
  overflow: hidden;
  animation: ${LargeBlockAnim} 1s linear infinite;
`;

const BaseBlock = styled.div<Pick<ILoader, "size" | "bg">>`
  position: absolute;
  width: ${({ size }) => (size ? generateSize(size) : "20px")};
  height: ${({ size }) => (size ? generateSize(size) : "20px")};
  background-color: ${({ bg }) => bg ?? "#fff"};
`;

const FirstBlock = styled(BaseBlock)`
  left: 0px;
  top: ${({ size }) => (size ? generateSize(size) : "20px")};
`;

const SecondBlock = styled(BaseBlock)`
  top: ${({ size }) => (size ? generateSize(size) : "20px")};
  left: ${({ size }) => (size ? generateSize(size) : "20px")};
  animation: ${TwoSmallBrickAnim} 1s linear infinite;
`;

const ThirdBlock = styled(BaseBlock)`
  top: 0px;
  margin-left: 0px;
  animation: ${ThreeSmallBrickAnim} 1s linear infinite;
`;

const FourthBlock = styled(BaseBlock)`
  top: 0px;
  left: ${({ size }) => (size ? generateSize(size) : "20px")};
  animation: ${FourSmallBrickAnim} 1s linear infinite;
`;

const Text = styled.div<Pick<ILoader, "color" | "fontSize">>`
  font-size: ${({ fontSize }) => fontSize ?? "16px"};
  line-height: 1;
  color: ${({ color }) => color ?? "#fff"};
  margin: 15px auto;
`;

export const BrickLoaders = (props: ILoader) => {
  const { size, bg, overlayBg, text } = props;

  return (
    <OverLay overlayBg={overlayBg}>
      <Contents>
        <LargestBlock size={size}>
          <FirstBlock size={size} bg={bg} />
          <SecondBlock size={size} bg={bg} />
          <ThirdBlock size={size} bg={bg} />
          <FourthBlock size={size} bg={bg} />
        </LargestBlock>
        <Text>{text}</Text>
      </Contents>
    </OverLay>
  );
};
