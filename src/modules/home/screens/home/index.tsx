import React, { useCallback, useEffect, useRef, useState } from "react";
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
import {
  CleanSubjectsData,
  SetSelectedSubject,
  SetSubjectList,
} from "../../../../redux/subjects/actions";
import { useTheme } from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";
import database from "@react-native-firebase/database";
import { DATABASE_REFS } from "../../../../services/firebase";
import {
  CleanActivitiesList,
  SetActivitiesList,
} from "../../../../redux/activities/actions";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { navigate, addListener } = useNavigation();

  const { user }: SessionType = useSelector(
    (store: RootState) => store.session
  );

  const activities: ActivityStateType = useSelector(
    (store: RootState) => store.activities
  );

  const subjects: SubjectStateType = useSelector(
    (store: RootState) => store.subjects
  );

  const { background, white_text } = useTheme();

  useEffect(() => {
    database()
      .ref(`${DATABASE_REFS.SUBJECTS}/${user.uid}`)
      .on("value", (snapshot) => {
        const subjects = snapshot.val();

        dispatch(SetSubjectList(subjects));
      });
  }, [user.uid]);

  useEffect(() => {
    database()
      .ref(`${DATABASE_REFS.ACTIVITIES}/${user.uid}`)
      .on("value", (snapshot) => {
        const activities = snapshot.val();
        //console.log("activities ->", activities);
        dispatch(SetActivitiesList(activities));
      });
  }, [user.uid]);

  const handleLogout = () => {
    signOut().then(() => {
      dispatch(sessionLogoutUser());
      dispatch(CleanSubjectsData());
      dispatch(CleanActivitiesList());
    });
  };

  const RenderItem: ListRenderItem<any> = ({ item }) => (
    <ActivitiesItem key={item.id} activity={item} />
  );

  const FilterSection = () => {
    return (
      <View style={{ backgroundColor: background }}>
        <Section>
          <SYText text="Disciplinas" secondary />
        </Section>

        <HorizontalMenu
          subjects={subjects.itens}
          selectedSubject={subjects.selectedSubject}
          onPressSubject={(subject) => {
            dispatch(SetSelectedSubject(subject));
          }}
          onPressAddSubject={() => {
            navigate("subjectForm");
          }}
        />

        <Section>
          <SYText text="Atividades" secondary />
        </Section>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <Header user={user}>
        <MainCard
          cardValue={subjects.selectedSubject.punctuation.note}
          maxCardValue={subjects.selectedSubject.punctuation.maxNote}
          subjectName={subjects.selectedSubject.name}
          midValue={subjects.selectedSubject.punctuation.midNote}
        />
      </Header>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View
        style={{
          marginBottom: Sizes.verticalScale(20),
          marginHorizontal: Sizes.verticalScale(19),
        }}
      >
        <SYButton
          text={"ADICIONAR ATIVIDADE"}
          onPress={() => {
            navigate("activityForm");
          }}
          icon={
            <FontAwesome5
              name="plus"
              size={Sizes.fontScale(20)}
              color={white_text}
            />
          }
        />
        <SYButton onPress={handleLogout} text={"LOGOUT"} linkStyle />
      </View>
    );
  };

  return (
    <View style={{ paddingBottom: Sizes.fontScale(45) }}>
      <Container
        sections={[
          {
            data: Object.keys(activities?.itens).map((key: any) => ({
              ...activities?.itens[key],
              id: key,
            })),
          },
        ]}
        stickyHeaderIndices={[0]}
        stickySectionHeadersEnabled
        renderItem={RenderItem}
        ListHeaderComponent={() => <ListHeaderComponent />}
        renderSectionHeader={() => <FilterSection />}
        ListFooterComponent={() => <ListFooterComponent />}
      />
    </View>
  );
};
