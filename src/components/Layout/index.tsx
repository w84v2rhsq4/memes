import React, { FunctionComponent, ComponentClass, ReactNode } from "react";
import styles from "./styles.css";

interface Props {
  header: ReactNode;
  content: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ header, content }) => {
  return (
    <>
      <nav className={styles.nav}>{header}</nav>
      <main className={styles.main}>{content}</main>
    </>
  );
};

export default Layout;
