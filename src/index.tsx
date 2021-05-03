import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { OnboardingNavigation } from "./modules";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import "react-native-gesture-handler";

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const Routes = () => {
  const { primary } = useTheme();

  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <OnboardingNavigation />
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor={primary} />
    </>
  );
};
