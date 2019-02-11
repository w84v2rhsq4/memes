import memes from "../api/memes";
import { memeIdType, MemeItemInterface } from "../types";
import { Dispatch } from "redux";
import { localStorageField } from "../consts";

export const RECEIVE_MEMES = "RECEIVE_MEMES";
const receiveMemes = (data: MemeItemInterface[]) => ({
  type: RECEIVE_MEMES,
  data
});

export const getAllMemes = () => (dispatch: Dispatch) => {
  memes.fetchMemes((memes: MemeItemInterface[]) => {
    dispatch(receiveMemes(memes));
  });
};

export const LOVE = "LOVE";
export const UNLOVE = "UNLOVE";
export const loveMeme = (id: memeIdType) => {
  return (dispatch: Dispatch, getState: Function) => {
    const alreadyLiked = getState().memes.lovedIds.has(id);
    const storage = JSON.parse(localStorage.getItem(localStorageField));

    if (!alreadyLiked) {
      storage.push(id);
      localStorage.setItem(
        localStorageField,
        JSON.stringify([...new Set(storage)])
      );
      dispatch({
        type: LOVE,
        data: id
      });
    } else {
      localStorage.setItem(
        localStorageField,
        JSON.stringify(storage.filter((item: string) => item !== id))
      );
      dispatch({
        type: UNLOVE,
        data: id
      });
    }
  };
};
