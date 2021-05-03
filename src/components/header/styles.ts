import styled from "styled-components/native";
import { Sizes } from "../../commons";

export const Container = styled.View`
  height: ${Sizes.verticalScale(70)}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
