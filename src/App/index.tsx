import React, { Component } from "react";
import styles from "./styles.css";
interface Props {
  name: string;
}

interface State {}

console.log(styles);

export default class App extends Component<Props, State> {
  render() {
    return <h1 className={styles.App}>Hello {this.props.name} ))))</h1>;
  }
}
