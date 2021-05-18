import React, { useRef } from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import LottieView from "lottie-react-native";
import { SYText } from "../../../../components";
import { useTheme } from "styled-components";

export const AnimScenne = (props: any) => {
  const animationRef = useRef(null);
  const { success_color } = useTheme();

  const { onAnimationFinish, text } = props.route.params;

  return (
    <Container>
      <LottieView
        style={{ width: Sizes.fontScale(320) }}
        ref={animationRef}
        source={require("../../../../assets/animation/acept.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          onAnimationFinish();
        }}
      />
      <SYText
        text={text}
        marginTop={Sizes.fontScale(20)}
        fontWeight="bold"
        size={Sizes.fontScale(25)}
        color={success_color}
      />
    </Container>
  );
};

const Container = styled.View`
  height: ${Sizes.SCREEN_HEIGHT - Sizes.horizontalScale(85)}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => `${theme.background}`};
`;
