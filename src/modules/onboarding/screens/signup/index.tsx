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

export const SignupScreen = () => {
  const TopContainer = () => {
    return (
      <View>
        <SYHeader title="Registrar" />
        {/* <Image
          style={{ width: horizontalScale(10), resizeMode: "contain" }}
          source={require("../../../../assets/logo.png")}
        /> */}
      </View>
    );
  };

  const BottomItem = () => {
    return (
      <Container>
        <TextContainer>
          <SYText
            text="Seja bem vindo"
            size={fontScale(25)}
            fontWeight="bold"
            marginBottom={fontScale(5)}
          />
          <SYText
            text="favor realize o cadastro a baixo"
            fontWeight="500"
            secondary
            marginBottom={fontScale(30)}
          />
        </TextContainer>
        <TextFieldsContainer>
          <SYTextInput
            placeholder="Nome Completo"
            marginBottom={fontScale(20)}
          />
          <SYTextInput placeholder="Email" marginBottom={fontScale(20)} />
          <SYTextInput placeholder="Senha" marginBottom={fontScale(20)} />
          <SYTextInput
            placeholder="Confirmar senha"
            marginBottom={fontScale(20)}
          />
        </TextFieldsContainer>
        <ButtonsContainer>
          <SYButton text="ENTRAR" marginBottom={fontScale(25)} />
          <SYButton
            text="Já tenho conta"
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
      bottomHeight={0.8}
      ImageItem={TopContainer}
      BottomItem={BottomItem}
    />
  );
};
