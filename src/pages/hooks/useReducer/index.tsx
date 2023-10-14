/**
 * useReducer
 * useReducer 是 useState 的替代方案
 * 常与 useContext 一起使用，可用于祖孙组件的通信
 */

import React, { useReducer, createContext, useContext } from "react";
import { Card } from 'antd';
import { Action, DispatchType, GlobalState } from "./types/index";
import UseReducerChild from './child';

// 创建一个初始状态
const initialState = {
  count: 0,
}

// 创建一个上下文
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: DispatchType;
} | undefined>(undefined);

// 创建一个自定义提供者组件
const reducer = (state:GlobalState, action:Action) => {
  console.log('reducer',state,action);
  let newState = {...state};
  switch (action.type) {
    case 'ADD':
      newState.count += action.payload || 1;
      break;
    case 'MINUS':
      newState.count -= action.payload || 1;
      break;
    default:
      break;
  }
  return newState;
}

const useReducerIndex: React.FC = () => {
  const [state, dispatch] = useReducer(reducer,  initialState);

  return (
    <GlobalContext.Provider value={{
      state, 
      dispatch
    }}>
      <Card>
        <h2>User Reducer</h2>
        { state.count }
        <UseReducerChild />
      </Card>
    </GlobalContext.Provider>
  );
}

// 自定义钩子，用于访问全局状态
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('createContext创建失败');
  }
  return context;
};

export default useReducerIndex;