import { connect } from "react-redux";
import { MemeItemInterface, StoreInterface } from "../types";
import Feed from "../components/Feed";

export default connect(({ memes: { data, lovedIds } }: StoreInterface) => ({
  memesData: data.filter((meme: MemeItemInterface) => lovedIds.has(meme.id))
}))(Feed);
