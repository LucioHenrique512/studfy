import React, { useCallback, useEffect } from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { SubjectType } from "../../../../types";

export const HorizontalMenu = ({
  subjects,
}: {
  subjects: Array<SubjectType>;
}) => {
  const { white_text } = useTheme();

  const ADD_SUBJECT: SubjectType = {
    id: "ADD_SUBJECT",
    name: "ADICIONAR",
    abbreviatedName: "ADICIONAR",
    punctuation: {
      maxNote: 0,
      midNote: 0,
      note: 0,
    },
  };

  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {subjects.map((item) => (
        <ItemButton selected={false} key={item.id}>
          <SYText
            size={Sizes.fontScale(13)}
            text={`${item.abbreviatedName}`}
            color={!true ? white_text : undefined}
          />
        </ItemButton>
      ))}
      <ItemButton
        style={{
          maxWidth: Sizes.horizontalScale(120),
          marginRight: Sizes.fontScale(25),
        }}
        selected={true}
      >
        <FontAwesome5
          name={"plus"}
          style={{ marginRight: 10 }}
          color={white_text}
        />

        <SYText
          size={Sizes.fontScale(13)}
          text={`${ADD_SUBJECT.abbreviatedName}`}
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
  margin-left: ${Sizes.fontScale(25)}px;
  align-items: center;
  justify-content: center;
  padding: ${Sizes.fontScale(20)}px;
  border-radius: ${Sizes.fontScale(7)}px;
  border: solid 1px ${({ theme }) => `${theme.secondary_text}65`};
  flex-direction: row;
  width: auto;
`;
