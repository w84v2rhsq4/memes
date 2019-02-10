import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { loveMeme } from "../actions";
import { Link } from "react-router-dom";
import { memeIdType, MemeItemInterface, StoreInterface } from "../types";
import ReactList from "react-list";

interface Props {
  memesData: MemeItemInterface[];
  loveMeme: Function;
}

const FeedContainer: FunctionComponent<Props> = ({ memesData, loveMeme }) => {
  const love = (id: memeIdType) => {
    return () => loveMeme(id);
  };
  const renderItem = (index: number, key: string) => {
    const meme = memesData[index];
    return (
      <div key={key}>
        <span>{meme.name}</span>
        <span onClick={love(meme.id)}>{"<3"}</span>{" "}
        <Link to={`/image/${meme.id}`}>
          <img src={meme.url} width="100%" />
        </Link>
        <hr />
      </div>
    );
  };
  return (
    <div>
      <ReactList
        itemRenderer={renderItem}
        length={memesData.length}
        // type="variable"
      />
    </div>
  );
};

FeedContainer.defaultProps = {
  memesData: []
};

export default connect(
  ({ memes }: StoreInterface) => {
    return {
      memesData: memes.data
    };
  },
  { loveMeme }
)(FeedContainer);
