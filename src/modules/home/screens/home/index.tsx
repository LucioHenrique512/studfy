import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SYButton } from "../../../../components";
import { sessionLogoutUser } from "../../../../redux/session/actions";
import { showToast } from "../../../../utils/toastNoatification";
import { Container } from "./styles";
import { Header, MainCard } from "../../components";
import { signOut } from "../../../../services/firebase";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RootState } from "../../../../redux/types";
import { SessionType } from "../../../../redux/session/types";

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
        <MainCard />
      </Header>
      <SYButton onPress={handleLogout} text={"LOGOUT"} linkStyle />
    </Container>
  );
};
