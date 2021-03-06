import { connect } from "react-redux";
import { StoreInterface } from "../types";
import { Card, Props as CardProps } from "../components/Card";
import { loveMeme } from "../actions";
import { Dispatch } from "react";

type OwnProps = Pick<CardProps, "id">;
export default connect(
  ({ memes: { data, lovedIds } }: StoreInterface, { id }: OwnProps) => {
    const { url, name } = data.find(meme => meme.id === id);

    return {
      url,
      title: name,
      isLiked: lovedIds.has(id)
    };
  },
  (dispatch, { id }: OwnProps) => ({
    handleLoveClick: () => {
      // @ts-ignore
      dispatch(loveMeme(id));
    }
  })
)(Card);
