import { combineReducers, Action } from "redux";
import { RECEIVE_MEMES, LOVE } from "../actions";
import { MemesInterface, lovedIdsType } from "../types";

interface ReceiveMemesActionInterface {
  type: typeof RECEIVE_MEMES;
  data: MemesInterface;
}

interface LoveMemeActionInterface {
  type: typeof LOVE;
  data: lovedIdsType;
}

export type ActionType = ReceiveMemesActionInterface | LoveMemeActionInterface;

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
