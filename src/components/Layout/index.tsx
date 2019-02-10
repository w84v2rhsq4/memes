import React, { FunctionComponent, ComponentClass } from "react";
import styles from "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface Props {
  tabs: { [key: string]: ComponentClass<any> };
}

const Layout: FunctionComponent<Props> = ({ tabs }) => {
  return (
    <Router>
      <div>
        <ul>
          {["/", "/loved"].map(tab => (
            <li key={tab} className={styles.tab}>
              <Link to={tab}>{tab}</Link>
            </li>
          ))}
        </ul>
        {Object.keys(tabs).map(tab => (
          <Route key={tab} path={tab} exact component={tabs[tab]} />
        ))}
      </div>
    </Router>
  );
};

export default Layout;
