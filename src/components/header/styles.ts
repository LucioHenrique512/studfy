import styled from "styled-components/native";
import { Sizes } from "../../commons";

interface ContainerProps {
  isFullColor?: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: ${Sizes.verticalScale(70)}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  justify-content: center;
  background: ${({ theme, isFullColor }) =>
    isFullColor ? theme.primary : theme.background};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
