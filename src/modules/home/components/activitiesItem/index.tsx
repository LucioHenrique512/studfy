import React from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { ActivityType } from "../../../../types";
import { ProgressBar } from "../progressBar";
import { FontAwesome5 } from "@expo/vector-icons";
import ContextMenu from "react-native-context-menu-view";
import { isoToBrDate } from "../../../../utils/dateFormat";

export const ActivitiesItem = ({
  activity,
  handleFinishActivity,
  handleEditActivity,
  handleDeleteActivity,
}: {
  activity: ActivityType;
  handleFinishActivity: (activity: ActivityType) => void;
  handleEditActivity: (activity: ActivityType) => void;
  handleDeleteActivity: (activity: ActivityType) => void;
}) => {
  const contextActions = activity.finished
    ? [{ title: "Excluir" }]
    : [
        { title: "Concluir atividade" },
        { title: "Editar" },
        { title: "Excluir" },
      ];

  return (
    <Container>
      <ContextMenu
        actions={contextActions}
        onPress={(event) => {
          const pressed = {
            name: event.nativeEvent.name,
            index: event.nativeEvent.index,
          };
          switch (pressed.name) {
            case "Concluir atividade":
              handleFinishActivity(activity);
              break;
            case "Editar":
              handleEditActivity(activity);
              break;
            case "Excluir":
              handleDeleteActivity(activity);
              break;
            default:
              return;
          }
        }}
      >
        <CardContainer>
          <CardBody>
            <TopContainer>
              <TitleContainer>
                <SYText text={activity.name} />
                <SYText
                  text={`${
                    !activity.finished
                      ? `Entrega: ${isoToBrDate(activity.finishDate)}`
                      : `Atividade concluida!`
                  }`}
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
              <SYText
                text={`Nota ${Math.round(
                  activity.punctuation.note
                )}/${Math.round(activity.punctuation.maxNote)}`}
                size={Sizes.fontScale(12)}
                secondary
              />
              <ProgressBar
                maxValue={activity.punctuation.maxNote}
                midValue={activity.punctuation.midNote}
                value={activity.punctuation.note}
                width={Sizes.horizontalScale(211)}
              />
            </BottomContainer>
          </CardBody>
        </CardContainer>
      </ContextMenu>
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
