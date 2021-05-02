import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingNavigation } from "./modules";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

export const Routes = () => {
  const { primary } = useTheme();
  return (
    <>
      <NavigationContainer>
        <OnboardingNavigation />
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor={primary} />
    </>
  );
};
