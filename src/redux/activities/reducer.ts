import { ActionType } from "../types";
import { CLEAN_ACTIVITIES_LIST, SET_ACTIVITIES_LIST } from "./actions";
import { ActivityStateType } from "./types";

const INIT_STATE: ActivityStateType = {
  itens: [
    // {
    //   id: "activiteidunico",
    //   name: "Atividade avaliativa A1",
    //   subjectId: "unico2",
    //   punctuation: {
    //     maxNote: 20,
    //     midNote: 10,
    //     note: 5,
    //   },
    // },
  ],
};

const activities = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_ACTIVITIES_LIST:
      return {
        ...state,
        itens: action.payload,
      };
    case CLEAN_ACTIVITIES_LIST:
      return INIT_STATE;
    default:
      return { ...state };
  }
};

export default activities;
