import { Reducer } from 'redux';

interface NameReducerAction {
  type: 'SET_NAME';
  payload: string;
};

export interface NameReducerState {
  name: string;
};

const state: NameReducerState = {
  name:'redux'
};

const setName = (prevState: NameReducerState, action: NameReducerAction) => {
  return {...prevState,name:action.payload};
};

const nameReducer: Reducer<NameReducerState,NameReducerAction> = (prevState = state, action) => {
  // console.log(prevState,action);
  switch(action.type){
    case 'SET_NAME':
      return setName(prevState, action);
    default:
  }
  return prevState;
};

export default nameReducer;