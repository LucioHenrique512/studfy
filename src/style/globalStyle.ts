import styled from "styled-components/native";
import { Sizes } from "../commons";

export const GlobalContainer = styled.SafeAreaView`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${Sizes.SCREEN_HEIGHT}px;
  background: ${({ theme }) => theme.background};
`;
