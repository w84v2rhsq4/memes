import { combineReducers } from "redux";
import { RECEIVE_MEMES, LOVE, UNLOVE } from "../actions";
import { MemesInterface, lovedIdsType } from "../types";

interface ReceiveMemesActionInterface {
  type: typeof RECEIVE_MEMES;
  data: MemesInterface;
}

interface LoveMemeActionInterface {
  type: typeof LOVE | typeof UNLOVE;
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
    case UNLOVE: {
      return {
        ...state,
        lovedIds: new Set(
          [...state.lovedIds].filter(id => id !== action.data.toString())
        )
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ memes });
