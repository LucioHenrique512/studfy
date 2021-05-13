import React, { useState } from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText, SYTextInput } from "../../../../components";
import { CircularProgress } from "../circularProgres";

export const MainCard = ({
  cardValue,
  maxCardValue,
}: {
  cardValue: number;
  maxCardValue: number;
}) => {
  return (
    <Container>
      <ChartContainer>
        <CircularProgress value={cardValue} maxValue={maxCardValue} />
      </ChartContainer>
      <TextContainer>
        <SYText
          text="Resumo da discplina"
          size={Sizes.fontScale(16)}
          fontWeight="bold"
        />
        <SYText text="Eng. de Software" size={Sizes.fontScale(12)} secondary />
        <SYText
          text="próxima entrega:"
          size={Sizes.fontScale(12)}
          marginTop={Sizes.horizontalScale(12)}
          secondary
        />
        <SYText
          text="10/04/1996"
          size={Sizes.fontScale(12)}
          secondary
          fontWeight="bold"
        />
      </TextContainer>
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
  flex-direction: row;
`;

const ChartContainer = styled.View`
  width: ${Sizes.horizontalScale(317) * 0.35}px;
  height: ${Sizes.horizontalScale(110)}px;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.View`
  width: ${Sizes.horizontalScale(317) * 0.65}px;
  height: ${Sizes.horizontalScale(110)}px;
  padding: ${Sizes.fontScale(18)}px;
`;
