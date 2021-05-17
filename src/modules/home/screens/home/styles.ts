import styled from "styled-components/native";
import { Sizes } from "../../../../commons";

export const Container = styled.SectionList`
  padding-bottom: 200px;
`;

export const Section = styled.View`
  margin-top: ${Sizes.fontScale(15)}px;
  margin-bottom: ${Sizes.fontScale(15)}px;
  margin-left: ${Sizes.fontScale(25)}px;
`;
