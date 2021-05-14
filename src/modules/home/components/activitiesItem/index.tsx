import React from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";

export const ActivitiesItem = ({ activity }: { activity: any }) => {
  console.log(activity);
  return (
    <Container>
      <CardContainer>
        <CardBody>
          <TopContainer>
            <TitleContainer>
              <SYText text={activity.name} />
              <SYText
                text={"Entrega: 10/04/1996"}
                secondary
                size={Sizes.fontScale(10)}
                fontWeight="bold"
              />
            </TitleContainer>
            <SYText
              text={"activity.activity"}
              size={Sizes.fontScale(12)}
              secondary
            />
          </TopContainer>
          <BottomContainer>
            <SYText text={"Nota 10/20"} size={Sizes.fontScale(12)} secondary />
          </BottomContainer>
        </CardBody>
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

const CardBody = styled.View`
  justify-content: space-between;
  height: 100%;
`;

const TopContainer = styled.View``;
const BottomContainer = styled.View``;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
