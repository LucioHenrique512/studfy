import React, { useState } from "react";
import {
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
  Platform,
} from "react-native";
import styled, { useTheme } from "styled-components/native";
import { fontScale, verticalScale } from "../../commons/sizes";
import { SYText } from "../text";
import { Sizes } from "../../commons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { onChange } from "react-native-reanimated";

interface DatePickerProps {
  dataPlaceholder?: string;
  timePlaceholder?: string;
  marginBottom?: number;
  marginTop?: number;
  onChange?: (dateString: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onBlur?: any;
  editable?: boolean;
  message?: string;
  error?: boolean;
}
type modeTypes = "date" | "time" | "datetime" | "countdown";

export const SYDatePicker = (props: DatePickerProps) => {
  const { secondary_text, text_input_text_color, text_error_color } =
    useTheme();

  const [mode, setMode] = useState<modeTypes>("time");
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<Date>(new Date());

  const handleShow = (mode: modeTypes) => {
    setShow(true);
    setMode(mode);
  };

  const handleChange = (event: any) => {
    setShow(Platform.OS === "ios");
    if (props.onChange && !!event.nativeEvent.timestamp) {
      setValue(new Date(event.nativeEvent.timestamp));
      props.onChange(new Date(event.nativeEvent.timestamp).toISOString());
    }
  };

  const propsInputContainer = { ...props, marginBottom: 0, marginTop: 0 };

  const getFormatedDate = (isoDate: string) => {
    return isoDate
      ? isoDate.split("T")[0].split("-").reverse().join("/")
      : isoDate;
  };

  return (
    <Container marginBottom={props.marginBottom} marginTop={props.marginTop}>
      <InputContainer {...propsInputContainer}>
        <DateButton onPress={() => handleShow("date")}>
          <FontAwesome5
            name="calendar"
            color={secondary_text}
            size={Sizes.fontScale(17)}
            style={{ marginRight: Sizes.fontScale(10) }}
          />
          <SYText
            text={
              !props.value
                ? props.dataPlaceholder
                : getFormatedDate(props.value)
            }
            secondary
            size={Sizes.fontScale(17)}
          />
        </DateButton>
        {/* <TimeButton onPress={() => handleShow("time")}>
          <FontAwesome5
            name="clock"
            color={secondary_text}
            size={Sizes.fontScale(17)}
            style={{ marginHorizontal: Sizes.fontScale(10) }}
          />
          <SYText
            text={props.timePlaceholder}
            secondary
            size={Sizes.fontScale(17)}
          />
        </TimeButton> */}

        {show && (
          <DateTimePicker
            mode={mode === "date" ? "date" : "time"}
            value={value}
            is24Hour
            onChange={handleChange}
          />
        )}
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

const InputContainer = styled.View<DatePickerProps>`
  height: ${verticalScale(47)}px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  background-color: ${({ theme }) => theme.text_input_background};
  border: ${({ error }) => (error ? 2 : 1)}px;
  justify-content: center;
  padding-left: ${fontScale(15)}px;
  padding-right: ${fontScale(15)}px;
  flex-direction: row;
  border-color: ${({ theme, error }) =>
    error ? theme.text_error_color : `${theme.secondary_text}50`};
`;

const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TimeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 45%;
`;

const Container = styled.View<DatePickerProps>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
`;
