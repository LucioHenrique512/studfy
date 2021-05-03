import styled from "styled-components/native";
import { Sizes } from "../commons";
import { Platform, StatusBar } from "react-native";

const getPaddingTop = () => {
  return Platform.OS === "android" ? 25 : 0;
};

export const GlobalContainer = styled.SafeAreaView`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${Sizes.SCREEN_HEIGHT}px;
  background: ${({ theme }) => theme.background};
  padding-top: ${getPaddingTop()}px;
`;
