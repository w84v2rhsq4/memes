import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RouteType, getComponentByRoute } from "../../routes";
import Navigation from "../Navigation";
import Layout from "../Layout";

const App = () => (
  <Router>
    <Layout
      header={<Navigation items={[RouteType.FEED, RouteType.LOVED]} />}
      content={
        <>
          {[RouteType.FEED, RouteType.LOVED, RouteType.SINGLE_IMAGE].map(
            item => (
              <Route
                key={item}
                path={item}
                exact
                component={getComponentByRoute(item)}
              />
            )
          )}
        </>
      }
    />
  </Router>
);

export default App;
