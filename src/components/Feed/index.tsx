import React, { FunctionComponent } from "react";
import { MemeItemInterface, memeIdType } from "../../types";

interface Props {
  memesData: MemeItemInterface[];
  loveMeme: Function;
}

const Feed: FunctionComponent<Props> = ({ memesData, loveMeme }) => {
  const love = (id: memeIdType) => {
    return () => loveMeme(id);
  };
  return (
    <div>
      {memesData.map(meme => (
        <div key={meme.id}>
          <span>{meme.name}</span>
          <span onClick={love(meme.id)}>{"<3"}</span>
          <hr />
        </div>
      ))}
    </div>
  );
};
