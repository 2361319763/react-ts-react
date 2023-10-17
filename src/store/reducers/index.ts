import { combineReducers } from "redux";
import userReducer, { UserReducerState } from "./userReducer";
import countReducer, { CountReducerState } from "./countReducer";

export interface ReducerInterface {
  userReducer: UserReducerState;
  countReducer: CountReducerState;
};

const reducer = combineReducers({
  userReducer,
  countReducer
});

export default reducer;