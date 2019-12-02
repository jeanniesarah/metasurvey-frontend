import React from 'react';
import { animated, interpolate } from 'react-spring/hooks';
import styles from './styles.module.css';

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
  const { i, x, y, rot, scale, trans, bind, data, gone, onSave, isMobile } = props;
  const { text, type } = data[i];

  const isTextarea = type === 'custom';

  return !isTextarea ? (
    <animated.div
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
            <div className={styles.pillbox} style={!isMobile ? { opacity: 0 } : {}}>
              <p className={styles.red}>←No</p>
              <p className={styles.green}>Yes→</p>
            </div>
          <p className={styles.text}>{text}</p>
        </div>
      </animated.div>
    </animated.div>
  ) : (
    <animated.div
      className={styles.cardWrapper}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <div className={styles.cardInner}>
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
        </div>
      </div>
    </animated.div>
  );
};
