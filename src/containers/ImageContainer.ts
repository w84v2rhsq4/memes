import { connect } from "react-redux";
import { StoreInterface } from "../types";
import { RouteComponentProps } from "react-router";
import { Card } from "../components/Card";
import { loveMeme } from "../actions";

export default connect(
  (
    { memes: { data, lovedIds } }: StoreInterface,
    {
      match: {
        params: { id: id }
      }
    }: RouteComponentProps<{ id: string }>
  ) => {
    const { url, name } = data.find(meme => meme.id === id);
    return {
      url: url,
      title: name,
      isLiked: lovedIds.has(id),
      fullSize: true
    };
  },
  (
    dispatch,
    {
      match: {
        params: { id: id }
      }
    }
  ) => ({
    handleLoveClick: () => {
      dispatch(loveMeme(id));
    }
  })
)(Card);
