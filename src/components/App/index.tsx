import React from "react";
import FeedContainer from "../../containers/FeedContainer";
import LovedFeedContainer from "../../containers/LovedFeedContainer";
import ImageContainer from "../../containers/ImageContainer";
import Layout from "../Layout";

const App = () => (
  <Layout
    tabs={{
      "/": FeedContainer,
      "/loved": LovedFeedContainer,
      "/image/:id": ImageContainer
    }}
  />
);

export default App;
