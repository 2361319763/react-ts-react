import { createStore } from "redux";

interface Action {
  type: 'SET_NAME';
  payload: string;
}

const reducer = (prevState = {name:'redux'},action:Action) => {
  console.log(prevState,action);
  switch(action.type){
    case 'SET_NAME':
      return {...prevState,name:action.payload}
    default:
  }
  return prevState;
}

const store = createStore(reducer);

export default store;