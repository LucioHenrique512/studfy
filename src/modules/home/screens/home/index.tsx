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
import { ActionType, RootState } from "../../../../redux/types";
import { SessionType } from "../../../../redux/session/types";
import { ActivityType, SubjectType } from "../../../../types";
import { View, ListRenderItem } from "react-native";
import { Sizes } from "../../../../commons";
import { ActivityStateType } from "../../../../redux/activities/types";
import { SubjectStateType } from "../../../../redux/subjects/types";
import { SetSelectedSubject } from "../../../../redux/subjects/actions";

const data = {
  subjects: [],
  activities: [],
};

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const { user }: SessionType = useSelector(
    (store: RootState) => store.session
  );

  const activities: ActivityStateType = useSelector(
    (store: RootState) => store.activities
  );

  const subjects: SubjectStateType = useSelector(
    (store: RootState) => store.subjects
  );

  const initialSubject: SubjectType = {
    id: "",
    name: "",
    abbreviatedName: "",
    punctuation: { maxNote: 0, midNote: 0, note: 0 },
  };

  const handleLogout = () => {
    signOut().then(() => {
      dispatch(sessionLogoutUser());
    });
  };

  const HeaderComponent = () => (
    <View>
      <Header user={user}>
        <MainCard
          cardValue={subjects.selectedSubject.punctuation.note}
          maxCardValue={subjects.selectedSubject.punctuation.maxNote}
          subjectName={subjects.selectedSubject.name}
          midValue={subjects.selectedSubject.punctuation.midNote}
        />
      </Header>

      <Section>
        <SYText text="Disciplinas" secondary />
      </Section>

      <HorizontalMenu
        subjects={subjects.itens}
        selectedSubject={subjects.selectedSubject}
        onPressSubject={(subject) => {
          dispatch(SetSelectedSubject(subject));
        }}
        onPressAddSubject={() => {}}
      />

      <Section>
        <SYText text="Atividades" secondary />
      </Section>
    </View>
  );

  const RenderItem: ListRenderItem<any> = ({ item }) => (
    <ActivitiesItem key={item.id} activity={item} />
  );

  return (
    <View style={{ paddingBottom: Sizes.fontScale(40) }}>
      <Container
        data={activities.itens}
        ListHeaderComponent={() => <HeaderComponent />}
        renderItem={RenderItem}
      />
    </View>
  );
};

{
  /* <SYButton onPress={handleLogout} text={"LOGOUT"} linkStyle /> */
}
