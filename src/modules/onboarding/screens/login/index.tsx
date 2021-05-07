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
import { authenticateUser } from "../../../../helpers/firebase";
import { showToast } from "../../../../utils/toastNoatification";
import { useDispatch } from "react-redux";
import {
  sectionAuthenticateUser,
  sectionLogoutUser,
} from "../../../../redux/section/actions";

export const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const handleSubmitForm = (value: any) => {
    const email: string = value.email;
    const password: string = value.password;
    setLoading(true);

    authenticateUser({ email, password })
      .then((response) => {
        setLoading(false);
        dispatch(sectionAuthenticateUser(response));
        showToast({ type: "success", text1: "Seja bem vindo! 😊" });
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        dispatch(sectionLogoutUser());
        switch (error.code) {
          case "auth/wrong-password":
            showToast({
              type: "error",
              text1: "Usuário ou senha incorretos.",
            });
            break;
          default:
            showToast({
              type: "error",
              text1:
                "Algo de errado ocorreu com o login, entre em contato com o suporte!",
            });
            break;
        }
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
                  keyboardType={"email-address"}
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
                  keyboardType={"visible-password"}
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
