import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, SubjectForm } from "./screens";

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="subjectForm" component={SubjectForm} />
    </Stack.Navigator>
  );
};
