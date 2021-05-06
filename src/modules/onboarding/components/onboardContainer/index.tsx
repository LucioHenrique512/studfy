import React from "react";
import { Container, ImageContainer, BottomContainer, Image } from "./styles";
import { OnboardContainerProps } from "../../types";
import { Sizes } from "../../../../commons";
import { Platform } from "react-native";

export const OnboardContainer = ({
  ImageItem,
  bottomHeight,
  BottomItem,
}: OnboardContainerProps) => (
  <Container
    bottomContainerHeight={bottomHeight}
    behavior={"position"}
    keyboardVerticalOffset={Platform.OS === "ios" ? -15 : -70}
  >
    <ImageContainer
      style={{ height: Sizes.SCREEN_HEIGHT * (1 - bottomHeight) }}
    >
      <ImageItem />
    </ImageContainer>
    <BottomContainer
      style={{
        height: Sizes.SCREEN_HEIGHT * bottomHeight,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      }}
    >
      <BottomItem />
    </BottomContainer>
  </Container>
);
