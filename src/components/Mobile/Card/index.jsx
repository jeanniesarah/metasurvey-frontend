import React from 'react';
import { animated, interpolate } from 'react-spring/hooks';
import styles from './styles.module.css';

const areEqual = (prevProps, nextProps) => {
  return false;
};

export default React.memo(props => {
  const {
    i,
    indexOnScreen,
    indexOnScreenThreshold,
    x,
    y,
    rot,
    scale,
    trans,
    bind,
    data,
    isMobile,
  } = props;
  const { text, imageSrc } = data[i];

  return (
    <animated.div
      className={styles.cardWrapper}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
        opacity: indexOnScreen > indexOnScreenThreshold ? 0.0 : 1.0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <animated.div
        {...bind(i)}
        className={`${styles.cardInner} ${
          isMobile ? '' : styles.cardInnerDesktop
        }`}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <div className={styles.card}>
          <div
            className={styles.pillbox}
            style={!isMobile ? { opacity: 0 } : {}}
          >
            <p className={styles.red}>←No</p>
            <p className={styles.green}>Yes→</p>
          </div>
          <div
            className={`${styles.cardContent} ${
              isMobile ? styles.cardContentMobile : ''
            }`}
          >
            {imageSrc && (
              <img
                src={imageSrc}
                className={`${styles.image} ${
                  isMobile ? styles.imageMobile : ''
                }`}
              />
            )}
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
});
