import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SYButton, SYText, SYTextInput } from "../../../../components";
import { sessionLogoutUser } from "../../../../redux/session/actions";
import { showToast } from "../../../../utils/toastNoatification";
import { Container, Section } from "./styles";
import { Header, MainCard, HorizontalMenu } from "../../components";
import { signOut } from "../../../../services/firebase";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RootState } from "../../../../redux/types";
import { SessionType } from "../../../../redux/session/types";
import { Sizes } from "../../../../commons";
import { View } from "react-native";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { user }: SessionType = useSelector(
    (store: RootState) => store.session
  );

  const handleLogout = () => {
    signOut().then(() => {
      dispatch(sessionLogoutUser());
    });
  };

  return (
    <Container>
      <Header user={user}>
        <MainCard cardValue={5} maxCardValue={100} />
      </Header>

      <Section>
        <SYText text="Disciplinas" secondary />
      </Section>

      <HorizontalMenu />

      <Section>
        <SYText text="Atividades" secondary />
      </Section>
      {/* <SYButton onPress={handleLogout} text={"LOGOUT"} linkStyle /> */}
    </Container>
  );
};
