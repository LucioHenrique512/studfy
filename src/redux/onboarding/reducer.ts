import { ActionType } from "../types";
import { OnboardingActionTypes } from "./actions";

const INIT_STATE = {
  login: { email: "", password: "" },
};

const onboarding = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case OnboardingActionTypes.SET_LOGIN_EMAIL_INPUT_TEXT:
      return {
        ...state,
        login: { ...state.login, email: action.payload },
      };
    case OnboardingActionTypes.SET_LOGIN_PASSWORD_INPUT_TEXT:
      return {
        ...state,
        login: { ...state.login, password: action.payload },
      };
    default:
      return state;
  }
};

export default onboarding;
