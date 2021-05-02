import React from "react";
import { OnboardContainer } from "../components/onboardContainer";
import { Text, Image, View } from "react-native";

export const Wellcome = () => {
  const ImagemItem = () => {
    return <Image source={require("../../../assets/logo.png")} />;
  };

  const BottomItem = () => {
    return (
      <View>
        <Text>Teste</Text>
      </View>
    );
  };

  return (
    <OnboardContainer
      bottomHeight={0.45}
      ImageItem={ImagemItem}
      BottomItem={BottomItem}
    />
  );
};
