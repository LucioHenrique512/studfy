import React, { useCallback, useEffect } from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { SubjectType } from "../../../../types";

export const HorizontalMenu = ({
  subjects,
  onPressAddSubject,
  onPressSubject,
  selectedSubject,
}: {
  subjects: Array<SubjectType>;
  onPressSubject: (subject: SubjectType) => void;
  onPressAddSubject: () => void;
  selectedSubject: SubjectType;
}) => {
  const { white_text } = useTheme();

  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {subjects &&
        Object.keys(subjects).map((key: any) => (
          <ItemButton
            selected={key === selectedSubject.id}
            onPress={() => {
              onPressSubject({ ...subjects[key], id: key });
            }}
            key={key}
          >
            <SYText
              size={Sizes.fontScale(13)}
              text={`${subjects[key].abbreviatedName}`}
              color={key === selectedSubject.id ? white_text : undefined}
            />
          </ItemButton>
        ))}
      {/* <ItemButton
        style={{
          maxWidth: Sizes.horizontalScale(120),
        }}
        selected={true}
        onPress={onPressAddSubject}
      >
        <SYText size={Sizes.fontScale(13)} text={`TODAS`} color={white_text} />
      </ItemButton> */}
      <ItemButton
        style={{
          maxWidth: Sizes.horizontalScale(120),
          marginRight: Sizes.horizontalScale(24),
        }}
        selected={true}
        onPress={onPressAddSubject}
      >
        <FontAwesome5
          name={"plus"}
          style={{ marginRight: 10 }}
          color={white_text}
        />

        <SYText
          size={Sizes.fontScale(13)}
          text={"ADICIONAR"}
          color={white_text}
        />
      </ItemButton>
    </Container>
  );
};

const Container = styled.ScrollView`
  height: ${Sizes.horizontalScale(45)}px;
`;

interface ItemButton {
  selected?: boolean;
}

const ItemButton = styled.TouchableOpacity<ItemButton>`
  height: ${Sizes.horizontalScale(45)}px;
  background: ${({ theme, selected }) =>
    selected ? theme.primary : theme.foreground};
  margin-left: ${Sizes.horizontalScale(24)}px;
  align-items: center;
  justify-content: center;
  padding: ${Sizes.fontScale(20)}px;
  border-radius: ${Sizes.fontScale(7)}px;
  border-width: 1px;
  border-color: ${({ theme }) => `${theme.secondary_text}65`};
  flex-direction: row;
  width: auto;
`;
