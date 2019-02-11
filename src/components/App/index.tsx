import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes, getComponentByRoute } from "../../routes";
import Navigation from "../Navigation";
import Layout from "../Layout";

const App = () => (
  <Router>
    <Layout
      header={<Navigation items={[routes.FEED, routes.LOVED]} />}
      content={
        <>
          {[routes.FEED, routes.LOVED, routes.SINGLE_IMAGE].map(item => (
            <Route
              key={item}
              path={item}
              exact
              component={getComponentByRoute(item)}
            />
          ))}
        </>
      }
    />
  </Router>
);

export default App;
