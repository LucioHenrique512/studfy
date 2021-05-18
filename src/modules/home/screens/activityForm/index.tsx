import React, { useState } from "react";
import { Container, FormContainer } from "./styles";
import {
  SYHeader,
  SYButton,
  SYTextInput,
  SYText,
  SYSelectInput,
  SYDatePicker,
} from "../../../../components";
import { Formik, validateYupSchema } from "formik";
import { Sizes } from "../../../../commons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { SubjectType } from "../../../../types";
import * as Yup from "yup";
import database from "@react-native-firebase/database";
import { DATABASE_REFS } from "../../../../services/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { SessionType } from "../../../../redux/session/types";
import { useNavigation } from "@react-navigation/core";
import { SubjectStateType } from "../../../../redux/subjects/types";

export const ActivityForm = () => {
  const [loading, setLoading] = useState(false);
  const { white_text } = useTheme();
  const { user }: SessionType = useSelector(
    (state: RootState) => state.session
  );

  const subjects: SubjectStateType = useSelector(
    (state: RootState) => state.subjects
  );

  const { navigate } = useNavigation();

  const formValues = {
    name: "",
    subjectId: "",
    subjectName: "",
    finishDate: "",
    description: "",
    punctuation: {
      maxNote: "",
      midNote: "",
      note: "",
    },
  };

  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Favor insira o nome da atividade."),
    subjectId: Yup.string().required("Favor selecione uma matéria"),
    finishDate: Yup.string().required("Favor insira a data de entrega."),
    description: Yup.string().required("Favor insira a data de entrega."),
    punctuation: Yup.object().shape({
      maxNote: Yup.number().required("Insirra a nota máxima da diciplina."),
      midNote: Yup.number().required("Insirra a nota média da diciplina."),
    }),
  });

  const handleSubmitForm = (values: typeof formValues) => {
    console.log(values);

    // setLoading(true);
    // const databaseRef = database()
    //   .ref(`${DATABASE_REFS.SUBJECTS}/${user.uid}`)
    //   .push();
    // databaseRef.set(values).then(() => {
    //   navigate("aceptScenne", {
    //     text: "Matéria salva com sucesso!",
    //     onAnimationFinish: () => {
    //       navigate("home");
    //     },
    //   });
    // });
  };

  return (
    <Container behavior="height" keyboardVerticalOffset={Sizes.fontScale(65)}>
      <SYHeader isFullColor title="Nova atividade" />
      <Formik
        initialValues={formValues}
        onSubmit={handleSubmitForm}
        validationSchema={formValidationSchema}
      >
        {({
          handleBlur,
          handleChange,
          values,
          submitForm,
          errors,
          touched,
          setFieldValue,
        }) => {
          const hasErrors = Object.keys(errors).length !== 0;
          return (
            <FormContainer>
              <SYText
                text="Favor insira as informações abaixo."
                size={Sizes.fontScale(16)}
                fontWeight="bold"
                marginBottom={Sizes.fontScale(10)}
                marginTop={Sizes.fontScale(10)}
              />
              <SYSelectInput
                placeholder="Selecione a materia *"
                onValueChange={(item: any) => {
                  setFieldValue("subjectId", item);
                  setFieldValue("subjectName", subjects.itens[item].name);
                }}
                onBlur={handleBlur("subjectId")}
                selectedValue={subjects.itens[values.subjectId]}
                labelKey={"name"}
                valueKey={"key"}
                optons={Object.keys(subjects.itens).map((key: any) => ({
                  key,
                  ...subjects.itens[key],
                }))}
                editable={!loading}
                error={touched.subjectId && !!errors.subjectId}
                message={
                  touched.subjectId && !!errors.subjectId
                    ? errors.subjectId
                    : ""
                }
              />
              <SYTextInput
                placeholder="Nome da atividade *"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                editable={!loading}
                error={touched.name && !!errors.name}
                message={touched.name && !!errors.name ? errors.name : ""}
              />

              <SYTextInput
                placeholder="Descrição"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                editable={!loading}
                error={touched.description && !!errors.description}
                message={
                  touched.description && !!errors.description
                    ? errors.description
                    : ""
                }
              />
              <SYDatePicker
                dataPlaceholder="Data de entrega"
                timePlaceholder="Hora"
                onChange={handleChange("finishDate")}
                onBlur={handleBlur("finishDate")}
                value={values.finishDate}
                editable={!loading}
                error={touched.finishDate && !!errors.finishDate}
                message={
                  touched.finishDate && !!errors.finishDate
                    ? errors.finishDate
                    : ""
                }
              />
              <SYText
                text="Pontuação da matéria"
                size={Sizes.fontScale(11)}
                marginBottom={Sizes.fontScale(12)}
              />
              <SYTextInput
                placeholder="Nota máxima *"
                onChangeText={handleChange("punctuation.maxNote")}
                onBlur={handleBlur("punctuation.maxNote")}
                value={values.punctuation.maxNote.toString()}
                keyboardType="number-pad"
                editable={!loading}
                error={
                  touched.punctuation?.maxNote && !!errors.punctuation?.maxNote
                }
                message={
                  touched.punctuation?.maxNote && !!errors.punctuation?.maxNote
                    ? errors.punctuation?.maxNote
                    : ""
                }
              />
              <SYTextInput
                placeholder="Nota média *"
                onChangeText={handleChange("punctuation.midNote")}
                onBlur={handleBlur("punctuation.midNote")}
                value={values.punctuation.midNote.toString()}
                keyboardType="number-pad"
                editable={!loading}
                error={
                  touched.punctuation?.midNote && !!errors.punctuation?.midNote
                }
                message={
                  touched.punctuation?.midNote && !!errors.punctuation?.midNote
                    ? errors.punctuation?.midNote
                    : ""
                }
              />
              <SYTextInput
                placeholder="Já possui nota nessa atividade?"
                onChangeText={handleChange("punctuation.note")}
                onBlur={handleBlur("punctuation.note")}
                value={values.punctuation.note.toString()}
                keyboardType="number-pad"
                editable={!loading}
                error={touched.punctuation?.note && !!errors.punctuation?.note}
                message={
                  touched.punctuation?.note && !!errors.punctuation?.note
                    ? errors.punctuation?.note
                    : ""
                }
              />
              <SYButton
                text="SALVAR"
                disabled={loading || hasErrors}
                onPress={submitForm}
                loading={loading}
                marginBottom={Sizes.horizontalScale(25)}
                icon={
                  <FontAwesome5
                    name="sd-card"
                    size={Sizes.fontScale(23)}
                    color={white_text}
                  />
                }
              />
            </FormContainer>
          );
        }}
      </Formik>
    </Container>
  );
};
