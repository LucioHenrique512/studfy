import React, { useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { Animated } from "react-native";

export const CircularProgress = ({ value: progress }: { value: number }) => {
  const SIZE = Sizes.fontScale(90);
  const STROKE_WIDTH = Sizes.fontScale(15);
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = RADIUS * 2 * Math.PI;
  const { multiply, Value } = Animated;
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const value = useRef(new Value(50)).current;
  const alpha = value.interpolate({
    inputRange: [0, 100],
    outputRange: [CIRCUMFERENCE, 0],
  });

  const strokeDashoffset = multiply(alpha, RADIUS);

  return (
    <Container>
      {/* <SYText
        text={10}
        style={{ position: "absolute", left: (SIZE - 5) / 2 }}
        textAlign="center"
      /> */}
      <Svg height={SIZE} width={SIZE}>
        <AnimatedCircle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="red"
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          {...{
            strokeWidth: STROKE_WIDTH,
            strokeDashoffset: alpha,
          }}
        />
      </Svg>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
`;
