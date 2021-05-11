import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { FontAwesome5 } from "@expo/vector-icons";

interface HeaderProps {
  children?: JSX.Element;
}

export const Header = ({ children }: HeaderProps) => {
  const { white_text } = useTheme();
  return (
    <Container>
      <ContentContainer>
        <InfoContainer>
          <UserContainer>
            <UserPicture
              source={{
                uri: "https://randomuser.me/api/portraits/women/95.jpg",
              }}
            />
            <SYText text="Olá, Fulana" color={white_text} />
          </UserContainer>
          <NotificationsButtom>
            <FontAwesome5
              name="bell"
              size={Sizes.fontScale(17)}
              color={white_text}
            />
            <NotifyDot />
          </NotificationsButtom>
        </InfoContainer>
        <CardContainer>{children}</CardContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  height: ${Sizes.fontScale(198)}px;
`;

const ContentContainer = styled.View`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${Sizes.fontScale(143)}px;
  padding-top: ${Sizes.fontScale(20)}px;
  background: ${({ theme }) => theme.primary};
  align-items: center;
  position: relative;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${Sizes.horizontalScale(317)}px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PICTURE_SIZE = Sizes.fontScale(42);

const UserPicture = styled.Image`
  width: ${PICTURE_SIZE}px;
  height: ${PICTURE_SIZE}px;
  border-radius: ${PICTURE_SIZE / 2}px;
  margin-right: ${Sizes.horizontalScale(15)}px;
`;

const NotificationsButtom = styled.TouchableOpacity`
  position: relative;
  padding: ${Sizes.fontScale(5)}px;
`;

const NotifyDot = styled.View`
  position: absolute;
  top: 1px;
  right: 1px;
  height: ${Sizes.fontScale(10)}px;
  width: ${Sizes.fontScale(10)}px;
  border-radius: ${Sizes.fontScale(10) / 2}px;
  background: #f16b6b;
`;

const CardContainer = styled.View`
  width: ${Sizes.horizontalScale(317)}px;
  height: ${Sizes.horizontalScale(110)}px;
  position: absolute;
  bottom: ${Sizes.fontScale(-55)}px;
`;
