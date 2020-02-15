import React from 'react';
import { animated, interpolate } from 'react-spring/hooks';
import styles from '../Card/styles.module.css';

const generateAnswer = (gone, feedback, data) => ({
  comment: feedback,
  answers: data.map(question => {
    const { id } = question;
    return {
      ...question,
      value: gone[id],
    };
  }),
});

export default props => {
  const [feedback, setFeedback] = React.useState('');
  const {
    i,
    indexOnScreen,
    indexOnScreenThreshold,
    x,
    y,
    data,
    gone,
    onSave,
    isMobile,
  } = props;

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
      <div
        className={`${styles.cardInner} ${styles.cardInnerCustom} ${
          isMobile ? '' : styles.cardInnerDesktop
        }`}
      >
        <div className={styles.form}>
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            className={styles.textarea}
            placeholder="Tell us what you think..."
          ></textarea>
          <button
            type="button"
            className={styles.submit}
            onClick={() => {
              const answer = generateAnswer(
                gone,
                feedback,
                data.slice(1)
              );

              onSave(answer);
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => {
              const answer = generateAnswer(
                gone,
                '', // no textarea value is saved
                data.slice(1)
              );

              onSave(answer);
            }}
          >
            Skip
          </button>
        </div>
      </div>
    </animated.div>
  );
};
