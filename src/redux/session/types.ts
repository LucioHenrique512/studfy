import { UserType } from "../../types";

export type SessionType = {
  credentials?: {
    idToken?: string;
    serverAuthCode?: string;
  };
  user: UserType;
};
