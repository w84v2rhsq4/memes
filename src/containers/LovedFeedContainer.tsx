import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { MemeItemInterface, StoreInterface } from "../types";

interface Props {
  memesData: MemeItemInterface[];
}

const LovedFeedContainer: FunctionComponent<Props> = ({ memesData }) => {
  return (
    <div>
      {memesData.map(meme => (
        <div key={meme.id}>
          <span>{meme.name}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

LovedFeedContainer.defaultProps = {
  memesData: []
};

const mapStateToProps = ({ memes: { data, lovedIds } }: StoreInterface) => {
  const memes = data.filter((meme: MemeItemInterface) => lovedIds.has(meme.id));
  return {
    memesData: memes
  };
};

export default connect(mapStateToProps)(LovedFeedContainer);
