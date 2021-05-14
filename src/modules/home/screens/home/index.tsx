import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SYButton, SYText, SYTextInput } from "../../../../components";
import { sessionLogoutUser } from "../../../../redux/session/actions";
import { showToast } from "../../../../utils/toastNoatification";
import { Container, Section } from "./styles";
import {
  Header,
  MainCard,
  HorizontalMenu,
  ActivitiesItem,
} from "../../components";
import { signOut } from "../../../../services/firebase";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RootState } from "../../../../redux/types";
import { SessionType } from "../../../../redux/session/types";
import { SubjectType } from "../../../../types";
import { View } from "react-native";

const data = {
  subjects: [
    {
      id: "unico2",
      name: "Programação Orientada a Objetos, 1",
      abbreviatedName: "POO 1",
      punctuation: {
        maxNote: 100,
        midNote: 70,
        note: 30,
      },
    },
    {
      id: "unico3",
      name: "Desenvolvimento WEB 1",
      abbreviatedName: "Web 1",
      punctuation: {
        maxNote: 100,
        midNote: 70,
        note: 70,
      },
    },
    {
      id: "unico",
      name: "Engenharia de Software",
      abbreviatedName: "Eng. Software",
      punctuation: {
        maxNote: 100,
        midNote: 70,
        note: 90,
      },
    },
  ],
  activities: [
    {
      id: "activiteidunico",
      name: "Atividade avaliativa A1",
      subjectId: "unico2",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 5,
      },
    },
    {
      id: "activiteidunico1",
      name: "Atividade avaliativa A1",
      subjectId: "unico",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 15,
      },
    },
    {
      id: "activiteidunico2",
      name: "Atividade avaliativa A1",
      subjectId: "unico3",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 18,
      },
    },
  ],
};

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { user }: SessionType = useSelector(
    (store: RootState) => store.session
  );

  const initialSubject: SubjectType = {
    id: "",
    name: "",
    abbreviatedName: "",
    punctuation: { maxNote: 0, midNote: 0, note: 0 },
  };

  const [selectedSubject, setSelectedSubject] =
    useState<SubjectType>(initialSubject);

  const handleLogout = () => {
    signOut().then(() => {
      dispatch(sessionLogoutUser());
    });
  };

  const HeaderComponent = () => (
    <View>
      <Header user={user}>
        <MainCard
          cardValue={selectedSubject.punctuation.note}
          maxCardValue={selectedSubject.punctuation.maxNote}
          subjectName={selectedSubject.name}
          midValue={selectedSubject.punctuation.midNote}
        />
      </Header>

      <Section>
        <SYText text="Disciplinas" secondary />
      </Section>

      <HorizontalMenu
        subjects={data.subjects}
        onPressSubject={(subject) => {
          setSelectedSubject(subject);
        }}
        onPressAddSubject={() => {}}
      />

      <Section>
        <SYText text="Atividades" secondary />
      </Section>
    </View>
  );

  return (
    <Container
      data={data.activities}
      ListHeaderComponent={() => <HeaderComponent />}
      renderItem={({ item, index }) => (
        <ActivitiesItem key={index} subject={item} />
      )}
    />
  );
};

{
  /* <SYButton onPress={handleLogout} text={"LOGOUT"} linkStyle /> */
}
