import { combineReducers } from "redux";
import nameReducer, { NameReducerState } from "./nameReducer";
import countReducer, { CountReducerState } from "./countReducer";

export interface ReducerInterface {
  nameReducer: NameReducerState;
  countReducer: CountReducerState;
};

const reducer = combineReducers({
  nameReducer,
  countReducer
});

export default reducer;