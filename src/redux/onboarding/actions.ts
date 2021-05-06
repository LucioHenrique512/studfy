export const OnboardingActionTypes = {
  SET_LOGIN_EMAIL_INPUT_TEXT: "SET_LOGIN_EMAIL_INPUT_TEXT",
  SET_LOGIN_PASSWORD_INPUT_TEXT: "SET_LOGIN_PASSWORD_INPUT_TEXT",
};

export const setLoginEmailInputText = (payload: any) => ({
  type: OnboardingActionTypes.SET_LOGIN_EMAIL_INPUT_TEXT,
  payload: payload,
});

export const setLoginPasswordInputText = (payload: any) => ({
  type: OnboardingActionTypes.SET_LOGIN_PASSWORD_INPUT_TEXT,
  payload: payload,
});
