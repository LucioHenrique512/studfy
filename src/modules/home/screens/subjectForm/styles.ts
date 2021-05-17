import styled from "styled-components/native";
import { Sizes } from "../../../../commons";

export const Container = styled.KeyboardAvoidingView`
  height: ${Sizes.SCREEN_HEIGHT}px;
  background: ${({ theme }) => theme.background};
`;

export const FormContainer = styled.ScrollView`
  padding: 0px ${Sizes.fontScale(25)}px;
  height: ${Sizes.SCREEN_HEIGHT - Sizes.verticalScale(95)}px;
`;
