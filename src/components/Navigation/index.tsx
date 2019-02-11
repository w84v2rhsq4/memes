import React, { FunctionComponent, ComponentClass } from "react";
import styles from "./styles.css";
import { RouteType, getNavTitleByRoute } from "../../routes";
import { NavLink } from "react-router-dom";

interface Props {
  items: RouteType[];
}

const Navigation: FunctionComponent<Props> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item}>
          <NavLink
            exact
            to={item}
            activeClassName={styles.activeItem}
            className={styles.item}
          >
            {getNavTitleByRoute(item)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
