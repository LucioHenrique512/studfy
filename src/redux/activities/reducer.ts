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
    {
      id: "activiteidunico1",
      name: "Atividade avaliativa A1",
      subjectId: "unico",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 12,
      },
    },
    {
      id: "activiteidunico2",
      name: "Atividade avaliativa A1",
      subjectId: "unico3",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 18,
      },
    },
    {
      id: "activiteidunico3",
      name: "Atividade avaliativa A1",
      subjectId: "unico3",
      punctuation: {
        maxNote: 20,
        midNote: 10,
        note: 1,
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
