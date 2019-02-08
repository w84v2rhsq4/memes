import React, { Component } from "react";

interface Props {
  name: string;
}

interface State {}

export default class App extends Component<Props, State> {
  render() {
    return <h1>Hello {this.props.name} </h1>;
  }
}
