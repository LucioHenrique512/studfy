import React from "react";
import { useTheme } from "styled-components";
import { Sizes } from "../../commons";
import { SYText } from "../text";
import { Container, TitleContainer } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

interface SYHeader {
  title: string;
  onCustomBack?: () => void;
  isFullColor?: boolean;
}

export const SYHeader = ({ title, onCustomBack, isFullColor }: SYHeader) => {
  const { primary, white_text } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container
      isFullColor={isFullColor}
      style={{
        paddingHorizontal: Sizes.horizontalScale(25),
      }}
    >
      <TitleContainer>
        <TouchableOpacity
          style={{
            paddingRight: Sizes.horizontalScale(16),
            paddingVertical: 3,
          }}
          onPress={() => {
            if (onCustomBack) {
              onCustomBack();
            } else {
              goBack();
            }
          }}
        >
          <FontAwesome5
            name="chevron-left"
            size={Sizes.fontScale(20)}
            color={isFullColor ? white_text : primary}
          />
        </TouchableOpacity>
        <SYText
          text={title}
          size={Sizes.fontScale(16)}
          fontWeight="bold"
          color={isFullColor ? white_text : primary}
        />
      </TitleContainer>
    </Container>
  );
};
