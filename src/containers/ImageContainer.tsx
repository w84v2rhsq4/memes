import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { StoreInterface } from "../types";
import { RouteComponentProps } from "react-router";

interface Props {
  imageSrc: string;
}

const ImageContainer: FunctionComponent<Props> = ({ imageSrc }) => {
  return <img src={imageSrc} />;
};

export default connect(
  (
    { memes: { data } }: StoreInterface,
    {
      match: {
        params: { id: id }
      }
    }: RouteComponentProps<{ id: string }>
  ) => ({
    imageSrc: data.find(meme => meme.id === id).url
  })
)(ImageContainer);
