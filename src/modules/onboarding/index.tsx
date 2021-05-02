import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Wellcome } from "./wellcome";

const Stack = createStackNavigator();

export const OnboardingNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="wellcome" component={Wellcome} />
    </Stack.Navigator>
  );
};
