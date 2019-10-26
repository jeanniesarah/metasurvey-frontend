import React from 'react';
import PropTypes from 'prop-types';
import { animated, interpolate } from 'react-spring/hooks';
import styles from './styles.module.css';

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { text } = data[i];

    return (
      <animated.div
        key={i}
        className={styles.cardWrapper}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ),
        }}
      >
        <animated.div
          {...bind(i)}
          className={styles.cardInner}
          style={{
            transform: interpolate([rot, scale], trans),
          }}
        >
          <div className={styles.card}>
            <div className={styles.pillbox}>
              <p className={styles.red}>←No</p>
              <p className={styles.green}>Yes→</p>
            </div>
            <p className={styles.text}>{text}</p>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  text: PropTypes.string,
};

export default Card;
