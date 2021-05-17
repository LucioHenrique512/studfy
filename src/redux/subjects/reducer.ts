import { ActionType } from "../types";
import { SubjectStateType } from "./types";
import { SET_SELECTED_SUBJECT } from "./actions";

const INIT_STATE: SubjectStateType = {
  itens: [
    {
      id: "unico2",
      name: "Programação Orientada a Objetos, 1",
      abbreviatedName: "POO 1",
      punctuation: {
        maxNote: 100,
        midNote: 70,
        note: 30,
      },
    },
    {
      id: "unico3",
      name: "Desenvolvimento WEB 1",
      abbreviatedName: "Web 1",
      punctuation: {
        maxNote: 100,
        midNote: 70,
        note: 70,
      },
    },
    {
      id: "unico",
      name: "Engenharia de Software",
      abbreviatedName: "Eng. Software",
      punctuation: {
        maxNote: 100,
        midNote: 70,
        note: 90,
      },
    },
  ],
  selectedSubject: {
    id: "",
    name: "",
    abbreviatedName: "",
    punctuation: { maxNote: 0, midNote: 0, note: 0 },
  },
};

const subjects = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_SELECTED_SUBJECT:
      return { ...state, selectedSubject: action.payload };
    default:
      return state;
  }
};

export default subjects;
