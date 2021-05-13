import React, { useEffect, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { Animated } from "react-native";
import { useTheme } from "styled-components";

export const CircularProgress = ({
  value: progress,
  maxValue,
}: {
  value: number;
  maxValue: number;
}) => {
  const SIZE = Sizes.fontScale(90);
  const STROKE_WIDTH = Sizes.fontScale(15);
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = RADIUS * 2 * Math.PI;
  const { multiply, Value } = Animated;
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const progressAnimation = useRef(new Value(50)).current;

  const progressRef = useRef<any>(null);

  const { secondary_text, circular_progress_color } = useTheme();

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const value = (CIRCUMFERENCE / maxValue) * progress;
    animation(value);
  }, [progress]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset: CIRCUMFERENCE - value.value,
        });
      }
    });
  }, [progress]);

  return (
    <Container>
      <SYText
        text={`${progress}/${maxValue}`}
        style={{ position: "absolute" }}
        textAlign="center"
      />
      <Svg height={SIZE} width={SIZE}>
        <AnimatedCircle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={`${secondary_text}35`}
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          strokeWidth={STROKE_WIDTH}
        />
        <AnimatedCircle
          ref={progressRef}
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={circular_progress_color}
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          strokeWidth={STROKE_WIDTH}
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
