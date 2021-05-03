import React from "react";
import styled from "styled-components/native";
import { fontScale, verticalScale } from "../../commons/sizes";

interface TextInputProps {
  placeholder: string;
  marginBottom?: number;
  marginTop?: number;
  onChange?: any;
  value?: string;
}

export const SYTextInput = (props: TextInputProps) => {
  return (
    <Container {...props}>
      <StyledTextInput placeholder={props.placeholder} value={props.value} />
    </Container>
  );
};

export const Container = styled.View<TextInputProps>`
  height: ${verticalScale(47)}px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
  background-color: ${({ theme }) => theme.text_input};
`;

export const StyledTextInput = styled.TextInput`
  padding-left: ${fontScale(15)}px;
  padding-right: ${fontScale(15)}px;
  height: 100%;
  font-size: ${fontScale(17)}px;
`;
