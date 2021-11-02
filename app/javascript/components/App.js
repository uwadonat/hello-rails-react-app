import React from "react";
import PropTypes from "prop-types";
import Greeting from "./Greeting";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Greeting />
      </React.Fragment>
    );
  }
}

export default App;
