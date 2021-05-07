import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens";

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
