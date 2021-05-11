import React from "react";
import { ActivityIndicator, ViewStyle } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { fontScale, horizontalScale, verticalScale } from "../../commons/sizes";
import { SYText } from "../text";

interface ButtonProps {
  text: string;
  secondary?: boolean;
  color?: string;
  onPress?: any;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  linkStyle?: boolean;
  textSize?: number;
  underline?: boolean;
  primaryLinkStyle?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const SYButton = (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <StyledButton
      disabled={props.loading ? props.loading : props.disabled}
      {...props}
    >
      {props.loading ? (
        <ActivityIndicator
          color={
            props.linkStyle
              ? props.primaryLinkStyle
                ? theme.primary
                : theme.secondary_text
              : "#FFFFFF"
          }
        />
      ) : (
        <SYText
          fontWeight="bold"
          textDecoration={props.underline ? "underline" : "none"}
          color={
            props.linkStyle
              ? props.primaryLinkStyle
                ? theme.primary
                : theme.secondary_text
              : "#FFFFFF"
          }
          text={props.text}
        />
      )}
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  ${({ width }) =>
    width ? `width: ${horizontalScale(width)}px` : `width: 100%`};
  ${({ linkStyle }) =>
    `height:${linkStyle ? "auto" : `${verticalScale(47)}px`}`};
  border-radius: ${fontScale(8)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) =>
    marginTop ? verticalScale(marginTop) : 0}px;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? verticalScale(marginBottom) : 0}px;
  background: ${({ secondary, theme, color, linkStyle, disabled }) =>
    linkStyle
      ? "transparent"
      : color
      ? `${color}${disabled ? "90" : ""}`
      : secondary
      ? `${theme.secondary}${disabled ? "90" : ""}`
      : `${theme.primary}${disabled ? "90" : ""}`};
`;
