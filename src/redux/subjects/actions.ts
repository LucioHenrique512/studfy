import { SubjectType } from "../../types";

export const SET_SELECTED_SUBJECT_ID = "SET_SELECTED_SUBJECT_ID";
export const UPDATE_SELECTED_SUBJECT = "UPDATE_SELECTED_SUBJECT";
export const SET_SUBJECT_LIST = "SET_SUBJECT_LIST";
export const CLEAN_SUBJECTS_DATA = "CLEAN_SUBJECTS_DATA";

export const SetSelectedSubjectId = (payload: string) => ({
  type: SET_SELECTED_SUBJECT_ID,
  payload,
});

export const UpdateSelectedSubject = (payload: SubjectType) => ({
  type: UPDATE_SELECTED_SUBJECT,
  payload,
});

export const SetSubjectList = (payload: any) => ({
  type: SET_SUBJECT_LIST,
  payload,
});

export const CleanSubjectsData = () => ({
  type: CLEAN_SUBJECTS_DATA,
});
