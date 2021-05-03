import React from "react";
import { OnboardContainer } from "../../components/onboardContainer";
import { Image } from "react-native";
import { SYText, SYButton } from "../../../../components";
import { fontScale } from "../../../../commons/sizes";
import { Container, ButtonsContainer, TextContainer } from "./styles";

export const WellcomeScreen = () => {
  const ImagemItem = () => {
    return <Image source={require("../../../../assets/logo.png")} />;
  };

  const BottomItem = () => {
    return (
      <Container>
        <TextContainer>
          <SYText
            text="Bem vindo ao Studfy"
            size={fontScale(25)}
            fontWeight="bold"
            marginBottom={fontScale(5)}
          />
          <SYText
            text="o seu companheiro nos estudos"
            fontWeight="500"
            secondary
            marginBottom={fontScale(30)}
          />
        </TextContainer>
        <ButtonsContainer>
          <SYButton text="REGISTRAR" marginBottom={fontScale(25)} />
          <SYButton text="ENTRAR" linkStyle primaryLinkStyle />
        </ButtonsContainer>
      </Container>
    );
  };

  return (
    <OnboardContainer
      bottomHeight={0.4}
      ImageItem={ImagemItem}
      BottomItem={BottomItem}
    />
  );
};
