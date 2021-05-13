import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYText } from "../../../../components";

const itens = ["ADICIONAR"]; //"Eng. Software", "GitHub", "Materia Inutil"];

export const HorizontalMenu = () => {
  const {} = useTheme();

  return (
    <Container
      data={itens}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(item) => {
        return (
          <ItemButton key={item.index}>
            <SYText text={`${item.item}`} />
          </ItemButton>
        );
      }}
    />
  );
};

const Container = styled.FlatList`
  height: ${Sizes.horizontalScale(55)}px;
`;

const ItemButton = styled.View`
  height: ${Sizes.horizontalScale(55)}px;
  background: ${({ theme }) => theme.foreground};
  margin-left: ${Sizes.fontScale(25)}px;
  align-items: center;
  justify-content: center;
  padding: ${Sizes.fontScale(20)}px;
  border-radius: ${Sizes.fontScale(7)}px;
  border: solid 1px ${({ theme }) => `${theme.secondary_text}65`};
`;
