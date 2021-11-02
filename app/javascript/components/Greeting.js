import React from "react";
import PropTypes from "prop-types";
class Greeting extends React.Component {
  render() {
    return (
      <div className="display">
        <h2>Display random messages from Redux </h2>
        <p>messages</p>
      </div>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default Greeting;
