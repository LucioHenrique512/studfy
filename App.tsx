import React from "react";
import { GlobalContainer } from "./src/style/globalStyle";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./src/style/themes";
import { Routes } from "./src";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux";
import "./src/services/firebase";
import Toast from "react-native-toast-message";
import { initGoogleSignin } from "./src/services/firebase";

export default function App() {
  const scheme = useColorScheme();
  initGoogleSignin();

  return (
    <AppearanceProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={scheme === "dark" ? dark : light}>
            <GlobalContainer>
              <Routes />
              <Toast ref={(ref) => Toast.setRef(ref)} />
            </GlobalContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </AppearanceProvider>
  );
}
