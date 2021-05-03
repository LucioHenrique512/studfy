import React from "react";
import { ReturnKeyTypeOptions } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { fontScale, verticalScale } from "../../commons/sizes";

interface TextInputProps {
  placeholder: string;
  marginBottom?: number;
  marginTop?: number;
  onChange?: any;
  value?: string;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
}

export const SYTextInput = (props: TextInputProps) => {
  const { secondary_text } = useTheme();
  return (
    <Container {...props}>
      <StyledTextInput
        placeholderTextColor={secondary_text}
        placeholder={props.placeholder}
        value={props.value}
        autoCompleteType="off"
        secureTextEntry={props.secureTextEntry}
        returnKeyType={props.returnKeyType}
      />
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
