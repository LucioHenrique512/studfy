export const sectionActionTypes = {
  SECTION_AUTHENTICATE_USER: "SECTION_AUTHENTICATE_USER",
  SECTION_LOGOUT_USER: "SECTION_LOGOUT_USER",
};

export const sectionAuthenticateUser = (payload: any) => ({
  type: sectionActionTypes.SECTION_AUTHENTICATE_USER,
  payload,
});

export const sectionLogoutUser = () => ({
  type: sectionActionTypes.SECTION_LOGOUT_USER,
});
