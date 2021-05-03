import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WellcomeScreen } from "./screens";

const Stack = createStackNavigator();

export const OnboardingNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="wellcome" component={WellcomeScreen} />
    </Stack.Navigator>
  );
};
