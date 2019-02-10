import memes from "../api/memes";
import { memeIdType, MemeItemInterface } from "../types";
import { Dispatch } from "redux";

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
export const loveMeme = (id: memeIdType) => {
  const storage = JSON.parse(localStorage.getItem("lovedIds"));
  storage.push(id);
  localStorage.setItem("lovedIds", JSON.stringify([...new Set(storage)]));
  return {
    type: LOVE,
    data: id
  };
};
