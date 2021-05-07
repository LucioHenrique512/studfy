import React from "react";
import { useDispatch } from "react-redux";
import { SYButton } from "../../../../components";
import { signoutUser } from "../../../../helpers/firebase";
import { sectionLogoutUser } from "../../../../redux/section/actions";
import { showToast } from "../../../../utils/toastNoatification";
import { Container } from "./styles";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    signoutUser()
      .then(() => {
        dispatch(sectionLogoutUser());
        showToast({
          type: "info",
          text1: "Você fou deslogado!",
          text2: "Volte sempre!",
        });
      })
      .catch(() => {
        showToast({
          type: "error",
          text1: "Ocorreu um erro ao deslogar!",
        });
      });
  };

  return (
    <Container>
      <SYButton onPress={handleLogout} text={"LOGOUT"} />
    </Container>
  );
};
