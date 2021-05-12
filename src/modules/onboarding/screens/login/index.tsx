import React, { useEffect, useState } from "react";
import { OnboardContainer } from "../../components/onboardContainer";
import { Image, View } from "react-native";
import { SYText, SYButton, SYTextInput } from "../../../../components";
import { fontScale, horizontalScale } from "../../../../commons/sizes";
import { SYHeader } from "../../../../components";
import { Container, TextContainer } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { showToast } from "../../../../utils/toastNoatification";
import { useDispatch } from "react-redux";
import { sessionLoginUser } from "../../../../redux/session/actions";
import { FontAwesome5 } from "@expo/vector-icons";
import { Sizes } from "../../../../commons";
import { useTheme } from "styled-components";
import { signIn } from "../../../../services/firebase";

const PLATFORMS = { GOOGLE: "GOOGLE", FACEBOOK: "FACEBOOK" };

export const LoginScreen = () => {
  const [loading, setLoading] = useState("");
  const { white_text } = useTheme();
  const dispatch = useDispatch();

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
          style={{ width: horizontalScale(170), resizeMode: "contain" }}
          source={require("../../../../assets/logo.png")}
        />
      </View>
    );
  };

  const handleLogin = (platform: string) => {
    console.log("Sigin with ", platform);
    setLoading(platform);
    signIn()
      .then((response) => {
        setLoading("none");

        const { user, idToken, serverAuthCode }: any = response;

        dispatch(
          sessionLoginUser({
            user: {
              name: user.name,
              email: user.email,
              photo: user.photo,
              uid: user.id,
            },
            credentials: { idToken, serverAuthCode },
          })
        );
      })
      .catch((error) => {
        setLoading("none");
        showToast({
          type: "error",
          text1: "Erro",
          text2: error.message,
        });
        console.log("DEU ERRO ->", error);
      });
  };

  const BottomItem = () => {
    return (
      <Container>
        <TextContainer>
          <SYText
            text="Olá, seja bem vindo! 😊"
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
        <SYButton
          text="ENTRAR COM GOOGLE"
          marginBottom={fontScale(25)}
          loading={loading === PLATFORMS.GOOGLE}
          onPress={() => handleLogin(PLATFORMS.GOOGLE)}
          icon={
            <FontAwesome5
              name="google"
              size={Sizes.fontScale(20)}
              color={white_text}
            />
          }
        />
        <SYButton
          text="ENTRAR COM FACEBOOK"
          marginBottom={fontScale(25)}
          loading={loading === PLATFORMS.FACEBOOK}
          onPress={() => handleLogin(PLATFORMS.FACEBOOK)}
          disabled
          icon={
            <FontAwesome5
              name="facebook-f"
              size={Sizes.fontScale(20)}
              color={white_text}
            />
          }
        />
      </Container>
    );
  };

  return (
    <OnboardContainer
      bottomHeight={0.5}
      ImageItem={TopContainer}
      BottomItem={BottomItem}
    />
  );
};
