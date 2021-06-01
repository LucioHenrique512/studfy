import React from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { ActivityType } from "../../../../types";
import { ProgressBar } from "../progressBar";
import { FontAwesome5 } from "@expo/vector-icons";

export const ActivitiesItem = ({ activity }: { activity: ActivityType }) => {
  console.log("ATIVIDADE ->", activity);
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
              text={activity.subjectName}
              size={Sizes.fontScale(12)}
              secondary
            />
            <SYText
              text={`${activity.description}`}
              size={Sizes.fontScale(12)}
              marginTop={Sizes.verticalScale(4)}
              secondary
              startIcon={<FontAwesome5 name="comment-alt" />}
            />
          </TopContainer>
          <BottomContainer>
            <SYText text={"Nota 10/20"} size={Sizes.fontScale(12)} secondary />
            <ProgressBar
              maxValue={activity.punctuation.maxNote}
              midValue={activity.punctuation.midNote}
              value={activity.punctuation.note}
              width={Sizes.horizontalScale(211)}
            />
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
  height: ${Sizes.verticalScale(90)}px;
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
const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
