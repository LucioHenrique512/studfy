import { ActionType } from "../types";
import { CLEAN_ACTIVITIES_LIST, SET_ACTIVITIES_LIST } from "./actions";
import { ActivityStateType } from "./types";

const INIT_STATE: ActivityStateType = {
  itens: {},
};

const activities = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_ACTIVITIES_LIST:
      return {
        ...state,
        itens: action.payload ? action.payload : {},
      };
    case CLEAN_ACTIVITIES_LIST:
      return INIT_STATE;
    default:
      return { ...state };
  }
};

export default activities;
