export const SET_ACTIVITIES_LIST = "SET_ACTIVITIES_LIST";
export const CLEAN_ACTIVITIES_LIST = "SET_ACTIVITIES_LIST";

export const SetActivitiesList = (payload: any) => ({
  type: SET_ACTIVITIES_LIST,
  payload,
});

export const CleanActivitiesList = () => ({ type: CLEAN_ACTIVITIES_LIST });
