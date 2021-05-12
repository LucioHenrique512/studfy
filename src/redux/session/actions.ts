import { RootState } from "../types";
import { SessionType } from "./types";
export const sessionActionTypes = {
  SECTION_AUTHENTICATE_USER: "SECTION_AUTHENTICATE_USER",
  SECTION_LOGOUT_USER: "SECTION_LOGOUT_USER",
};

export const sessionLoginUser = (payload: SessionType) => ({
  type: sessionActionTypes.SECTION_AUTHENTICATE_USER,
  payload,
});

export const sessionLogoutUser = () => ({
  type: sessionActionTypes.SECTION_LOGOUT_USER,
});
