import React, { useEffect, useRef, useState } from "react";
import Svg, { Rect } from "react-native-svg";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { Animated } from "react-native";
import { useTheme } from "styled-components";

export const ProgressBar = ({
  value: progress,
  maxValue,
  midValue,
  width,
}: {
  value: number;
  maxValue: number;
  midValue: number;
  width: number;
}) => {
  const { secondary_text, success_color, warning_color, error_color } =
    useTheme();
  const AnimatedRect = Animated.createAnimatedComponent(Rect);
  const progressBarRef = useRef<any>(null);
  const [lastProgress, setLastProgress] = useState(progress);

  const progressAnimation = useRef(new Animated.Value(50)).current;

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setLastProgress(toValue);
    });
  };

  useEffect(() => {
    const value = maxValue !== 0 ? (width / maxValue) * progress : 0;
    animation(value);
  }, [progress]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      if (progressBarRef?.current) {
        progressBarRef.current.setNativeProps({
          width: value.value,
        });
      }
    });
  }, [progress]);

  const getColor = (progress: number, midValue: number) => {
    if (progress < midValue) return error_color;
    else if (progress >= midValue && progress < midValue + 5)
      return warning_color;
    else return success_color;
  };

  return (
    <Container>
      <Svg width={width} height={7}>
        <Rect width={width} height="7" rx="3.5" fill={`${secondary_text}35`} />
        <AnimatedRect
          ref={progressBarRef}
          height="7"
          width={lastProgress}
          rx="3.5"
          fill={getColor(progress, midValue)}
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
