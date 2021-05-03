import React, { useEffect } from "react";
import { GlobalContainer } from "./src/style/globalStyle";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./src/style/themes";
import { Routes } from "./src";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

export default function App() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <ThemeProvider theme={scheme === "dark" ? dark : light}>
        <GlobalContainer>
          <Routes />
        </GlobalContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
