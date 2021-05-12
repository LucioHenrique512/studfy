import { Image as RNImage } from "react-native";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";

//porcentagem do bottom container
const BOTTOM_CONTAINER_HEIGHT = 0.4;

export const ImageContainer = styled.View`
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export const BottomContainer = styled.View`
  border-top-left-radius: ${Sizes.fontScale(25)}px;
  border-top-right-radius: ${Sizes.fontScale(25)}px;
  background: ${({ theme }) => theme.foreground};
  elevation: 50;
`;

export const Image = styled(RNImage)``;

interface ContainerProps {
  bottomContainerHeight: number;
}

export const Container = styled.KeyboardAvoidingView<ContainerProps>`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${Sizes.SCREEN_HEIGHT}px;
  background: ${({ theme }) => theme.background};
`;
