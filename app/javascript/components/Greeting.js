import React from "react";
import PropTypes from "prop-types";
class Greeting extends React.Component {
  render() {
    return <React.Fragment>I love yoooooooooooooooooooooooooo</React.Fragment>;
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default Greeting;
