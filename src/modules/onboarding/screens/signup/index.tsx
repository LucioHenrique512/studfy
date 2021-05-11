import React, { useEffect, useState } from "react";
import { OnboardContainer } from "../../components/onboardContainer";
import { View } from "react-native";
import { SYText, SYButton, SYTextInput } from "../../../../components";
import { fontScale } from "../../../../commons/sizes";
import { SYHeader } from "../../../../components";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  ButtonsContainer,
  TextContainer,
  TextFieldsContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/core";
import { showToast } from "../../../../utils/toastNoatification";

const initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Favor insira um nome."),
  email: Yup.string()
    .required("Favor insira um email.")
    .email("Inssira um email válido"),
  password: Yup.string()
    .required("Favor insira uma senha.")
    .min(6, "No minimo 6 characteres."),
  confirmPassword: Yup.string()
    .required("Favor confirme a sua senha.")
    .oneOf([Yup.ref("password"), null], "A senha não conicide."),
});

export const SignupScreen = () => {
  //useEffect(() => {}, []);
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  const TopContainer = () => {
    return (
      <View>
        <SYHeader title="Registrar" />
      </View>
    );
  };

  const handleSubmitForm = ({ email, password, name }: typeof initialValue) => {
    //console.log(value);
  };

  const BottomItem = () => {
    return (
      <Container>
        <Formik
          initialValues={initialValue}
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
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  editable={!loading}
                  error={touched.name && !!errors.name}
                  message={touched.name && !!errors.name ? errors.name : ""}
                />
                <SYTextInput
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
                <SYTextInput
                  placeholder="Confirmar senha"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  marginBottom={fontScale(5)}
                  value={values.confirmPassword}
                  editable={!loading}
                  secureTextEntry
                  keyboardType={"visible-password"}
                  error={touched.confirmPassword && !!errors.confirmPassword}
                  message={
                    touched.confirmPassword && !!errors.confirmPassword
                      ? errors.confirmPassword
                      : ""
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
                  text="Já tenho conta"
                  linkStyle
                  textSize={fontScale(12)}
                  underline
                  onPress={() => navigate("login")}
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
      bottomHeight={0.8}
      ImageItem={TopContainer}
      BottomItem={BottomItem}
    />
  );
};
