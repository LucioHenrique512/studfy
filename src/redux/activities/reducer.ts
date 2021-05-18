import { ActionType } from "../types";
import { ActivityStateType } from "./types";

const INIT_STATE: ActivityStateType = {
  itens: [
    {
      id: "activiteidunico",
      name: "Atividade avaliativa A1",
      subjectId: "unico2",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 5,
      },
    },
  ],
};

const activities = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default activities;
