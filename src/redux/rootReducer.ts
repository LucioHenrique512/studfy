import { combineReducers } from "redux";
import session from "./session/reducer";
import activities from "./activities/reducer";
import subjects from "./subjects/reducer";

export default combineReducers({ session, activities, subjects });
