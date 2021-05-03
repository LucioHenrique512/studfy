import React from "react";
import { OnboardContainer } from "../../components/onboardContainer";
import { Image, View } from "react-native";
import { SYText, SYButton, SYTextInput } from "../../../../components";
import { fontScale, horizontalScale } from "../../../../commons/sizes";
import { SYHeader } from "../../../../components";
import {
  Container,
  ButtonsContainer,
  TextContainer,
  TextFieldsContainer,
} from "./styles";

export const LoginScreen = () => {
  const TopContainer = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SYHeader title="Login" />
        <Image
          style={{ width: horizontalScale(150), resizeMode: "contain" }}
          source={require("../../../../assets/logo.png")}
        />
      </View>
    );
  };

  const BottomItem = () => {
    return (
      <Container>
        <TextContainer>
          <SYText
            text="Bem vindo de volta"
            size={fontScale(25)}
            fontWeight="bold"
            marginBottom={fontScale(5)}
          />
          <SYText
            text="favor realize o login a baixo"
            fontWeight="500"
            secondary
            marginBottom={fontScale(30)}
          />
        </TextContainer>
        <TextFieldsContainer>
          <SYTextInput placeholder="Email" marginBottom={fontScale(20)} />
          <SYTextInput placeholder="Senha" marginBottom={fontScale(20)} />
        </TextFieldsContainer>
        <ButtonsContainer>
          <SYButton text="ENTRAR" marginBottom={fontScale(25)} />
          <SYButton
            text="Esqueçi minha senha"
            linkStyle
            textSize={fontScale(12)}
            underline
          />
        </ButtonsContainer>
      </Container>
    );
  };

  return (
    <OnboardContainer
      bottomHeight={0.6}
      ImageItem={TopContainer}
      BottomItem={BottomItem}
    />
  );
};
