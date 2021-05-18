import { ActionType } from "../types";
import { SubjectStateType } from "./types";
import {
  SET_SELECTED_SUBJECT,
  SET_SUBJECT_LIST,
  CLEAN_SUBJECTS_DATA,
} from "./actions";

const INIT_STATE: SubjectStateType = {
  itens: [
    // {
    //   id: "unico2",
    //   name: "Programação Orientada a Objetos, 1",
    //   abbreviatedName: "POO 1",
    //   punctuation: {
    //     maxNote: 100,
    //     midNote: 70,
    //     note: 30,
    //   },
    // }
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
    case SET_SUBJECT_LIST:
      return {
        ...state,
        itens: action.payload,
      };
    case CLEAN_SUBJECTS_DATA:
      return INIT_STATE;
    default:
      return state;
  }
};

export default subjects;
