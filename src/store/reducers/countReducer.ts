import { Reducer } from 'redux';
interface CountReducerAction {
  type: 'SET_COUNT';
  payload: number;
};

export interface CountReducerState {
  count: number;
};

const state: CountReducerState = {
  count:0
};

const setCount = (prevState: CountReducerState, action: CountReducerAction) => {
  const count = prevState.count + action.payload;
  return {...prevState,count}
};
const countReducer: Reducer<CountReducerState,CountReducerAction> = (prevState = state, action) => {
  // console.log(prevState,action);
  switch(action.type){
    case 'SET_COUNT':
      return setCount(prevState,action);
    default:
  }
  return prevState;
};

export default countReducer;