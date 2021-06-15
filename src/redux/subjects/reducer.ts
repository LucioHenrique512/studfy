import { ActionType } from "../types";
import { SubjectStateType } from "./types";
import {
  UPDATE_SELECTED_SUBJECT,
  SET_SELECTED_SUBJECT_ID,
  SET_SUBJECT_LIST,
  CLEAN_SUBJECTS_DATA,
} from "./actions";

const INIT_STATE: SubjectStateType = {
  itens: {},
  selectedSubjectId: "",
  selectedSubject: {
    id: "",
    name: "",
    abbreviatedName: "",
    punctuation: { maxNote: 0, midNote: 0, note: 0 },
  },
};

const subjects = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_SELECTED_SUBJECT_ID:
      return { ...state, selectedSubjectId: action.payload };
    case UPDATE_SELECTED_SUBJECT:
      return {
        ...state,
        selectedSubject: action.payload
          ? action.payload
          : INIT_STATE.selectedSubject,
      };
    case SET_SUBJECT_LIST:
      return {
        ...state,
        itens: action.payload ? action.payload : {},
      };
    case CLEAN_SUBJECTS_DATA:
      return INIT_STATE;
    default:
      return state;
  }
};

export default subjects;
