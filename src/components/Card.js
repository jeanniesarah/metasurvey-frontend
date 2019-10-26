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
        className="cardWrapper"
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          className="cardInner"
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <div className="pillbox">
              <p className="red">←No</p>
              <p className="green">Yes→</p>
            </div>
            <p>{text}</p>
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
