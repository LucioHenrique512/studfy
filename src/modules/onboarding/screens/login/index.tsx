import React, { useEffect, useState } from "react";
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
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";
import { showToast } from "../../../../utils/toastNoatification";
import { useDispatch } from "react-redux";
import {
  sectionAuthenticateUser,
  sectionLogoutUser,
} from "../../../../redux/section/actions";
import { FontAwesome5 } from "@expo/vector-icons";
import { Sizes } from "../../../../commons";
import { useTheme } from "styled-components";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const onGoogleButtonPress = async () => {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

export const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();
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

    onGoogleButtonPress()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
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
          loading={loading}
          onPress={() => handleLogin("google")}
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
          loading={loading}
          onPress={() => handleLogin("facebook")}
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
