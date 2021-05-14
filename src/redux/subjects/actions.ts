import { SubjectType } from "../../types";

export const SET_SELECTED_SUBJECT = "SET_SELECTED_SUBJECT";

export const SetSelectedSubject = (payload: SubjectType) => ({
  type: SET_SELECTED_SUBJECT,
  payload,
});
