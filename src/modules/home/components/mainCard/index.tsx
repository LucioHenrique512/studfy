import React from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";

export const MainCard = () => {
  return <Container />;
};

const Container = styled.View`
  width: ${Sizes.horizontalScale(317)}px;
  height: ${Sizes.horizontalScale(110)}px;
  background: ${({ theme }) => theme.foreground};
  border-width: 1px;
  border-color: ${({ theme }) => `${theme.secondary_text}65`};
  border-radius: ${Sizes.fontScale(10)}px;
`;
