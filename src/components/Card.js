import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { text } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <div className="pillbox">
              <h5 className="red">←No</h5>
              <h5 className="green">Yes→</h5>
            </div>
            <h5>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  text: PropTypes.string
};

export default Card;
