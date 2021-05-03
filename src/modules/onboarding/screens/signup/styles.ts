import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { fontScale } from "../../../../commons/sizes";

export const Container = styled.View`
  padding: ${Sizes.fontScale(25)}px;
  justify-content: space-between;
  height: ${Sizes.SCREEN_HEIGHT * 0.35}px;
`;

export const TextContainer = styled.View``;

export const TextFieldsContainer = styled.View``;

export const ButtonsContainer = styled.View`
  margin-bottom: ${fontScale(25)}px;
`;
