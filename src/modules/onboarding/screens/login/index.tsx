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
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import * as Yup from "yup";
import { Formik } from "formik";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/core";

export const LoginScreen = () => {
  const { login: loginState } = useSelector(
    (state: RootState) => state.onboarding
  );

  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  // const dispatch = useDispatch();

  // const { email, password } = loginState;

  const handleSubmitForm = (value: any) => {
    const email: string = value.email;
    const password: string = value.password;

    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setLoading(false);
        navigate("wellcome");
        console.log("REsposta do fb ->", response);
      })
      .catch((error) => {
        setLoading(false);
        console.log("ERRO do fb", error);
      });
  };

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

  const formValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Favor insira o seu email.")
      .email("Inssira um email válido"),
    password: Yup.string()
      .required("Favor insira a sua senha.")
      .min(6, "No minimo 6 characteres."),
  });

  const BottomItem = () => {
    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => handleSubmitForm(value)}
          validationSchema={formValidationSchema}
        >
          {({
            handleBlur,
            handleChange,
            values,
            submitForm,
            errors,
            touched,
          }) => (
            <>
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
                <SYTextInput
                  key={"email"}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  editable={!loading}
                  error={touched.email && !!errors.email}
                  message={touched.email && !!errors.email ? errors.email : ""}
                />
                <SYTextInput
                  key={"password"}
                  placeholder="Senha"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  editable={!loading}
                  error={touched.password && !!errors.password}
                  message={
                    touched.password && !!errors.password ? errors.password : ""
                  }
                />
              </TextFieldsContainer>
              <ButtonsContainer>
                <SYButton
                  text="ENTRAR"
                  marginBottom={fontScale(25)}
                  onPress={submitForm}
                  loading={loading}
                />
                <SYButton
                  text="Esqueçi minha senha"
                  linkStyle
                  textSize={fontScale(12)}
                  underline
                />
              </ButtonsContainer>
            </>
          )}
        </Formik>
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
