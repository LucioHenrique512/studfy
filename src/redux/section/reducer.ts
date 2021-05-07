import { ActionType } from "../types";
import { sectionActionTypes } from "./actions";

const INIT_STATE = {
  section: {
    credential: null,
    email: null,
    name: null,
    uid: null,
  },
};

const section = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case sectionActionTypes.SECTION_AUTHENTICATE_USER:
      return {
        ...state,
        section: action.payload,
      };
    case sectionActionTypes.SECTION_LOGOUT_USER:
      return {
        ...state,
        section: INIT_STATE.section,
      };
    default:
      return state;
  }
};

export default section;
