import React, { useEffect, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";

export const CircularProgress = ({
  value: progress,
  maxValue,
  midValue,
}: {
  value: number;
  maxValue: number;
  midValue: number;
}) => {
  const SIZE = Sizes.fontScale(90);
  const STROKE_WIDTH = Sizes.fontScale(15);
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = RADIUS * 2 * Math.PI;
  const { secondary_text, success_color, warning_color, error_color } =
    useTheme();
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const progressRef = useRef<any>(null);

  const { Value } = Animated;

  const progressAnimation = useRef(new Value(50)).current;

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const value = maxValue !== 0 ? (CIRCUMFERENCE / maxValue) * progress : 0;
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

  const getColor = (progress: number, midValue: number) => {
    if (progress < midValue) return error_color;
    else if (progress >= midValue && progress < midValue + 10)
      return warning_color;
    else return success_color;
  };

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
          stroke={getColor(progress, midValue)}
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
