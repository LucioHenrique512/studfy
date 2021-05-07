import React, { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { OnboardingNavigation, HomeNavigation } from "./modules";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "./redux/types";

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const Routes = () => {
  const { primary } = useTheme();
  const { section } = useSelector((store: RootState) => store.section);

  console.log("SECTION", section);

  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        {!section.uid ? <OnboardingNavigation /> : <HomeNavigation />}
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor={primary} />
    </>
  );
};
