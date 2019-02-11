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
      <ReactList
        itemRenderer={renderItem}
        length={memesData.length}
        // type="variable"
      />
    </div>
  );
};

Feed.defaultProps = {
  memesData: []
};

export default Feed;
