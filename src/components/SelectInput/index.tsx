import React, { useRef } from "react";
import {
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
  Platform,
} from "react-native";
import styled, { useTheme } from "styled-components/native";
import { fontScale, verticalScale } from "../../commons/sizes";
import { SYText } from "../text";
import { Sizes } from "../../commons";
import { Picker } from "@react-native-picker/picker";

interface SYSelectInput {
  placeholder?: string;
  marginBottom?: number;
  marginTop?: number;
  onValueChange?: any;
  selectedValue?: any;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onBlur?: any;
  editable?: boolean;
  optons?: Array<any>;
  message?: string;
  error?: boolean;
  labelKey: string;
  valueKey: string;
  keyboardType?: KeyboardTypeOptions;
  defaultItemLabel: string;
}

export const SYSelectInput = (props: SYSelectInput) => {
  const { secondary_text, text_input_text_color, text_error_color } =
    useTheme();

  const propsInputContainer = { ...props, marginBottom: 0, marginTop: 0 };

  return (
    <Container {...props}>
      <InputContainer {...propsInputContainer}>
        <StyledPicker
          onValueChange={props.onValueChange}
          selectedValue={props.selectedValue}
          style={{ color: text_input_text_color }}
        >
          <Picker.Item label={props.defaultItemLabel} value="" />
          {props.optons?.map((item, index) => (
            <Picker.Item
              key={index}
              label={item[props.labelKey]}
              value={item[props.valueKey]}
            />
          ))}
        </StyledPicker>
      </InputContainer>
      <SYText
        text={props.message}
        size={Sizes.fontScale(13)}
        marginTop={
          Platform.OS === "android" ? Sizes.fontScale(2) : Sizes.fontScale(5)
        }
        marginBottom={
          Platform.OS === "android" ? Sizes.fontScale(2) : Sizes.fontScale(5)
        }
        fontWeight={"bold"}
        color={props.error ? text_error_color : secondary_text}
      />
    </Container>
  );
};

const InputContainer = styled.View<SYSelectInput>`
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

const StyledPicker = styled(Picker)`
  padding-left: ${fontScale(15)}px;
  padding-right: ${fontScale(15)}px;
  height: 100%;
  font-size: ${fontScale(17)}px;
`;

const Container = styled.View<SYSelectInput>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
`;
