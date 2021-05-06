import rootReducer from "./rootReducer";

export type ActionType = {
  type: string;
  payload?: any;
};

export type RootState = ReturnType<typeof rootReducer>;
