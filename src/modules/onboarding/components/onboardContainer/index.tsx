import React from "react";
import { Container, ImageContainer, BottomContainer, Image } from "./styles";
import { OnboardContainerProps } from "../../types";
import { Sizes } from "../../../../commons";

export const OnboardContainer = ({
  ImageItem,
  bottomHeight,
  BottomItem,
}: OnboardContainerProps) => {
  console.log(bottomHeight);
  return (
    <Container bottomContainerHeight={bottomHeight}>
      <ImageContainer
        style={{ height: Sizes.SCREEN_HEIGHT * (1 - bottomHeight) }}
      >
        <ImageItem />
      </ImageContainer>
      <BottomContainer style={{ height: Sizes.SCREEN_HEIGHT * bottomHeight }}>
        <BottomItem />
      </BottomContainer>
    </Container>
  );
};
