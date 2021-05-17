import React, { useCallback, useRef, useState } from "react";
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
import { useTheme } from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";

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

  const { background, white_text } = useTheme();

  const handleLogout = () => {
    signOut().then(() => {
      dispatch(sessionLogoutUser());
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
          onPressAddSubject={() => {}}
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
        {/* <SYButton onPress={handleLogout} text={"LOGOUT"} linkStyle /> */}
        <SYButton
          text={"ADICIONAR ATIVIDADE"}
          icon={
            <FontAwesome5
              name="plus"
              size={Sizes.fontScale(20)}
              color={white_text}
            />
          }
        />
      </View>
    );
  };

  return (
    <View style={{ paddingBottom: Sizes.fontScale(45) }}>
      <Container
        sections={[{ data: activities.itens }]}
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
