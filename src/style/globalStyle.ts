import styled from "styled-components/native";
import { Sizes } from "../commons";
import { Platform, StatusBar } from "react-native";

const getPaddingTop = () => {
  return Platform.OS === "android" ? StatusBar.currentHeight : 0;
};

export const GlobalContainer = styled.View`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${Sizes.SCREEN_HEIGHT}px;
  background: ${({ theme }) => theme.background};
  padding-top: ${getPaddingTop()}px;
`;
