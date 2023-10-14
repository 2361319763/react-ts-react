import { Dispatch } from "react";

export interface GlobalState {
  count: number;
}

export type Action = {
  type: 'ADD' | 'MINUS';
  payload: number;
};

export type DispatchType = Dispatch<Action>;