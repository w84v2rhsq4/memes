import React, { FunctionComponent } from "react";
import { MemeItemInterface } from "../../types";
import ReactList from "react-list";

import styles from "./styles.css";
import CardContainer from "../../containers/CardContainer";

interface Props {
  memesData: MemeItemInterface[];
  loveMeme: Function;
}

const Feed: FunctionComponent<Props> = ({ memesData }) => {
  const renderItem = (index: number, key: string) => (
    <CardContainer id={memesData[index].id} key={key} />
  );

  return (
    <div className={styles.cardsContainer}>
      {memesData.length > 0 ? (
        <ReactList
          itemRenderer={renderItem}
          length={memesData.length}
          // type="variable"
        />
      ) : (
        <h2>Not found</h2>
      )}
    </div>
  );
};

Feed.defaultProps = {
  memesData: []
};

export default Feed;
