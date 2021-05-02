import React from "react";
import { GlobalContainer } from "./src/style/globalStyle";
import { ThemeProvider } from "styled-components/native";
import { light } from "./src/style/themes";
import { Routes } from "./src";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalContainer>
        <Routes />
      </GlobalContainer>
    </ThemeProvider>
  );
}
