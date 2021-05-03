import React from "react";
import styled from "styled-components/native";

interface TextProps {
  text?: string;
  secondary?: boolean;
  color?: string;
  size?: number;
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold";
  textAlign?: "left" | "center" | "right";
  marginTop?: number;
  marginBottom?: number;
  textDecoration?: "underline" | "none";
}

export const SYText = (props: TextProps) => (
  <StyledText {...props}>{props.text}</StyledText>
);

const StyledText = styled.Text<TextProps>`
  font-size: ${({ size }) => (size ? size : 15)}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : "none"};
  color: ${({ color, secondary, theme }) =>
    secondary ? theme.secondary_text : color ? color : theme.primary_text};
`;
