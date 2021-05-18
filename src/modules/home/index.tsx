import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AnimScenne, HomeScreen, SubjectForm, ActivityForm } from "./screens";

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="subjectForm" component={SubjectForm} />
      <Stack.Screen name="aceptScenne" component={AnimScenne} />
      <Stack.Screen name="activityForm" component={ActivityForm} />
    </Stack.Navigator>
  );
};
