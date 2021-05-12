import React, { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { OnboardingNavigation, HomeNavigation } from "./modules";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "./redux/types";
import { SessionType } from "./redux/session/types";

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const Routes = () => {
  const { primary } = useTheme();
  const { user, credentials }: SessionType = useSelector(
    (store: RootState) => store.session
  );

  console.log("SESSION ->", { user, credentials });

  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        {!user.uid ? <OnboardingNavigation /> : <HomeNavigation />}
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor={primary} />
    </>
  );
};
