import React from "react";
import { OnboardContainer } from "../../components/onboardContainer";
import { Image, View } from "react-native";
import { SYText, SYButton } from "../../../../components";
import { fontScale } from "../../../../commons/sizes";
import { Container, ButtonsContainer, TextContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Sizes } from "../../../../commons";

export const WellcomeScreen = () => {
  const { navigate } = useNavigation();

  const ImagemItem = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: Sizes.SCREEN_HEIGHT * (1 - 0.4),
        }}
      >
        <Image
          style={{ width: Sizes.horizontalScale(250), resizeMode: "contain" }}
          source={require("../../../../assets/logo.png")}
        />
      </View>
    );
  };

  const BottomItem = () => {
    const handleLoginPress = () => {
      navigate("login");
    };

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
            marginBottom={fontScale(10)}
          />
        </TextContainer>
        <ButtonsContainer>
          <SYButton
            text="ENTRAR"
            marginBottom={fontScale(25)}
            onPress={handleLoginPress}
          />
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
