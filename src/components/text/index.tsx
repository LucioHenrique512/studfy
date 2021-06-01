import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { Sizes } from "../../commons";

interface TextProps {
  text?: string | number;
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
  style?: any;
  startIcon?: ReactNode;
}

export const SYText = (props: TextProps) => (
  <Container marginTop={props.marginTop} marginBottom={props.marginBottom}>
    {!!props.startIcon && <IconContainer>{props.startIcon}</IconContainer>}
    <StyledText {...props}>{props.text}</StyledText>
  </Container>
);

const Container = styled.View<TextProps>`
  flex-direction: row;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
`;

const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${Sizes.horizontalScale(5)}px;
`;

const StyledText = styled.Text<TextProps>`
  font-size: ${({ size }) => (size ? size : 15)}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : "none"};
  color: ${({ color, secondary, theme }) =>
    secondary ? theme.secondary_text : color ? color : theme.primary_text};
`;
