import { combineReducers, Action } from "redux";
import { RECEIVE_MEMES, LOVE } from "../actions";
import { MemesInterface } from "../types";

export interface ActionType {
  data: MemesInterface;
  type: typeof RECEIVE_MEMES | typeof LOVE;
}

const memes = (state = {} as MemesInterface, action: ActionType) => {
  switch (action.type) {
    case RECEIVE_MEMES:
      return {
        ...state,
        data: action.data
      };
    case LOVE:
      return {
        ...state,
        lovedIds: new Set([...state.lovedIds, action.data])
      };
    default:
      return state;
  }
};

export default combineReducers({ memes });
