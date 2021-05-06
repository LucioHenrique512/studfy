import React from "react";
import { ReturnKeyTypeOptions } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { fontScale, verticalScale } from "../../commons/sizes";
import { SYText } from "../index";
import { Sizes } from "../../commons";

interface TextInputProps {
  placeholder?: string;
  marginBottom?: number;
  marginTop?: number;
  onChangeText?: any;
  value?: string;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onBlur?: any;
  editable?: boolean;
  message?: string;
  error?: boolean;
}

export const SYTextInput = (props: TextInputProps) => {
  const {
    secondary_text,
    text_input_text_color,
    text_error_color,
  } = useTheme();

  const propsInputContainer = { ...props, marginBottom: 0, marginTop: 0 };

  return (
    <Container marginBottom={props.marginBottom} marginTop={props.marginTop}>
      <InputContainer {...propsInputContainer}>
        <StyledTextInput
          placeholderTextColor={secondary_text}
          placeholder={props.placeholder}
          value={props.value}
          autoCompleteType="off"
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
          returnKeyType={props.returnKeyType}
          onBlur={props.onBlur}
          editable={props.editable}
          style={{ color: text_input_text_color }}
        />
      </InputContainer>
      <SYText
        text={props.message}
        size={Sizes.fontScale(13)}
        marginTop={Sizes.fontScale(2)}
        marginBottom={Sizes.fontScale(2)}
        fontWeight={"bold"}
        color={props.error ? text_error_color : secondary_text}
      />
    </Container>
  );
};

const InputContainer = styled.View<TextInputProps>`
  height: ${verticalScale(47)}px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  background-color: ${({ theme }) => theme.text_input_background};
  border: ${({ error }) => (error ? 2 : 1)}px;
  border-color: ${({ theme, error }) =>
    error ? theme.text_error_color : `${theme.secondary_text}50`};
`;

const StyledTextInput = styled.TextInput`
  padding-left: ${fontScale(15)}px;
  padding-right: ${fontScale(15)}px;
  height: 100%;
  font-size: ${fontScale(17)}px;
`;

const Container = styled.View<TextInputProps>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
`;
