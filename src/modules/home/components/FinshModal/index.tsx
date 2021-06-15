import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Sizes } from "../../../../commons";
import { SYButton, SYText, SYTextInput } from "../../../../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface FinishModalProps {
  handleClose: () => void;
  handleSubmit: (value: string) => void;
  showModal: boolean;
  loading: boolean;
  maxValue: number;
}

export const FinishModal: React.FC<FinishModalProps> = ({
  handleClose,
  handleSubmit,
  loading,
  showModal,
  maxValue,
}) => {
  const { primary } = useTheme();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onClose = () => {
    cleanFields();
    handleClose();
  };

  const cleanFields = () => {
    setValue("");
    setError("");
  };

  useEffect(() => {
    if (showModal) cleanFields();
  }, [showModal]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        onClose();
      }}
    >
      <Container>
        <ModalContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <ModalHeader>
            <SYText text={"Concluir atividade"} secondary fontWeight="bold" />
            <CloseButtom onPress={onClose}>
              <FontAwesome5
                name="times"
                color={primary}
                size={Sizes.fontScale(20)}
              />
            </CloseButtom>
          </ModalHeader>
          <ModalBody>
            <SYText
              text={"Para concluir a atividade favor insira a nota abaixo."}
              secondary
              size={Sizes.fontScale(15)}
              marginBottom={Sizes.fontScale(10)}
            />
            <SYTextInput
              placeholder="Nota da atividade"
              error={error !== ""}
              message={error}
              value={value}
              marginBottom={Sizes.fontScale(5)}
              onChangeText={(text: string) => {
                setError("");
                const numbers = text.replace(/\D/gim, "");
                if (parseFloat(text) > maxValue)
                  setError(
                    "Não pode ser maior que a nota máxima da atividade."
                  );
                else setError("");

                setValue(numbers);
              }}
              editable={!loading}
              keyboardType="numeric"
            />
            <SYButton
              text="CONCLUIR ATIVIDADE"
              marginBottom={Sizes.fontScale(10)}
              loading={loading}
              onPress={() => {
                if (value === "") {
                  setError("Favor insira a nota!");
                } else {
                  handleSubmit(value);
                }
              }}
            />
          </ModalBody>
        </ModalContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${Sizes.SCREEN_HEIGHT}px;
`;

const Modal = styled.Modal``;

const ModalContainer = styled.View`
  width: ${Sizes.SCREEN_WIDTH - Sizes.SCREEN_WIDTH * 0.15}px;
  background: ${({ theme }) => theme.foreground};
  border-width: 1px;
  border-color: ${({ theme }) => `${theme.secondary_text}65`};
  border-radius: ${Sizes.fontScale(8)}px;
`;

const ModalHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => `${theme.secondary_text}65`};
`;

const CloseButtom = styled.TouchableOpacity`
  height: ${Sizes.fontScale(30)}px;
  width: ${Sizes.fontScale(30)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.View`
  padding: 10px 15px;
`;
