import React from "react";

export default class Redirect extends React.Component {
  constructor(props) {
    super();
    this.state = { ...props };
  }
  componentWillMount() {
    window.location = this.state.loc;
  }
  render() {
    return <section>Redirecting...</section>;
  }
}
