import { ActionType } from "../types";
import { sessionActionTypes } from "./actions";
import { SessionType } from "./types";

const INIT_STATE: SessionType = {
  user: { email: undefined, name: undefined, photo: undefined, uid: undefined },
  credentials: { idToken: undefined, serverAuthCode: undefined },
};

const session = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case sessionActionTypes.SECTION_AUTHENTICATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    case sessionActionTypes.SECTION_LOGOUT_USER:
      return {
        ...state,
        ...INIT_STATE,
      };
    default:
      return state;
  }
};

export default session;
