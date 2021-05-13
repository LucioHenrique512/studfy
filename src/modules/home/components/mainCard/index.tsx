import React from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { CircularProgress } from "../circularProgres";

export const MainCard = () => {
  return (
    <Container>
      <ChartContainer>
        <CircularProgress value={100} />
      </ChartContainer>
    </Container>
  );
};

const Container = styled.View`
  width: ${Sizes.horizontalScale(317)}px;
  height: ${Sizes.horizontalScale(110)}px;
  background: ${({ theme }) => theme.foreground};
  border-width: 1px;
  border-color: ${({ theme }) => `${theme.secondary_text}65`};
  border-radius: ${Sizes.fontScale(10)}px;
  overflow: hidden;
`;

const ChartContainer = styled.View`
  width: ${Sizes.horizontalScale(317) * 0.35}px;
  height: ${Sizes.horizontalScale(110)}px;
  align-items: center;
  justify-content: center;
`;
