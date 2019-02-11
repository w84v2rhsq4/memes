import { connect } from "react-redux";
import { StoreInterface } from "../types";
import Feed from "../components/Feed";

export default connect(({ memes: { data, lovedIds } }: StoreInterface) => ({
  memesData: [...data].map(meme => {
    return { ...meme, isLiked: lovedIds.has(meme.id) };
  })
}))(Feed);
