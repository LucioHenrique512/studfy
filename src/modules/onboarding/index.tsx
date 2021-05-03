import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WellcomeScreen, LoginScreen, SignupScreen } from "./screens";

const Stack = createStackNavigator();

export const OnboardingNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="wellcome" component={WellcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
