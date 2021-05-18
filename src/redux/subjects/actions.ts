import { SubjectType } from "../../types";

export const SET_SELECTED_SUBJECT = "SET_SELECTED_SUBJECT";
export const SET_SUBJECT_LIST = "SET_SUBJECT_LIST";
export const CLEAN_SUBJECTS_DATA = "CLEAN_SUBJECTS_DATA";

export const SetSelectedSubject = (payload: SubjectType) => ({
  type: SET_SELECTED_SUBJECT,
  payload,
});

export const SetSubjectList = (payload: any) => ({
  type: SET_SUBJECT_LIST,
  payload,
});

export const CleanSubjectsData = () => ({
  type: CLEAN_SUBJECTS_DATA,
});
