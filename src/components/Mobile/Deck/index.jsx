import React, { useState } from 'react';
import { useSprings } from 'react-spring/hooks';
import { useGesture } from 'react-with-gesture';
import styles from './styles.module.css';

import Card from '../Card';

import logo from '../../logo.png';
// import data from '../../../data.js';

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck({ surveys }) {
  if (!surveys) return null;

  const data = [{ type: 'custom' }].concat(surveys.questions);

  const [gone, setGone] = useState({});

  const [props, set] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) {
        gone[data[index].id] = dir === 1;
        setGone({
          ...gone,
          [data[index].id]: dir === 1,
        });
      }

      set(i => {
        if (index !== i) return;
        const isGone = gone[data[index].id] !== undefined;

        const x = isGone
          ? (200 + window.innerWidth) * dir
          : down
          ? xDelta
          : 0;

        const rot = xDelta / 100 + dir * 10 * velocity;

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 50,
            tension: down ? 800 : isGone ? 200 : 500,
          },
        };
      });

      if (!down && gone.size === data.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  console.log(surveys);

  return (
    <>
      {surveys.logo && (
        <img src={surveys.logo} className={styles.brand} alt="Logo" />
      )}

      <h1 className={styles.heading}>{surveys.title}</h1>
      {props.map(({ x, y, rot, scale }, i) => (
        <Card
          key={i}
          i={i}
          x={x}
          y={y}
          rot={rot}
          scale={scale}
          trans={trans}
          data={data}
          bind={bind}
          gone={gone}
        />
      ))}
      <div className={styles.logoContainer}>
        <p className={styles.logoText}>Powered&nbsp;by</p>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
    </>
  );
}

export default Deck;
