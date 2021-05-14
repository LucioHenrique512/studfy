import React from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";

export const ActivitiesItem = ({ subject }: { subject: any }) => {
  console.log(subject);
  return (
    <Container>
      <CardContainer>
        <SYText text="teste" />
      </CardContainer>
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: ${Sizes.verticalScale(20)}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  align-items: center;
`;

const CardContainer = styled.View`
  width: ${Sizes.horizontalScale(317)}px;
  height: ${Sizes.verticalScale(73)}px;
  background: ${({ theme }) => theme.foreground};
  border-radius: ${Sizes.fontScale(8)}px;
  border-width: 1px;
  border-color: ${({ theme }) => `${theme.secondary_text}65`};
  padding: ${Sizes.fontScale(15)}px;
`;
