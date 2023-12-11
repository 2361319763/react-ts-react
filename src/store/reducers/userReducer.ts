import { Reducer } from 'redux';

interface UserReducerAction {
  type: 'SET_NAME'|'SET_USER';
  payload: any;
};

export interface UserReducerState {
  name: string;
  age?: number;
  sex?: string;
  phone?: string;
};

const state: UserReducerState = {
  name:'redux'
};

const setName = (prevState: UserReducerState, action: UserReducerAction) => {
  return {...prevState,name:action.payload};
};
const setUser = (prevState: UserReducerState, action: UserReducerAction) => {
  return {...prevState,...action.payload};
};

const userReducer: Reducer<UserReducerState,UserReducerAction> = (prevState = state, action) => {
  // console.log(prevState,action);
  switch(action.type){
    case 'SET_NAME':
      return setName(prevState, action);
    case 'SET_USER':
      return setUser(prevState, action);
    default:
  }
  return prevState;
};

export default userReducer;