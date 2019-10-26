import React, { useState } from 'react';
import Checkbox from './components/Checkbox';
import styles from './Desktop.module.css';
import illustrationSrc from './img.png';

/*
data example
[
	{
		id: 'some_id1',
		text: 'Your UI is shit'
	},
	{
		id: 'some_id_2',
		text: 'Don\'t work for me at all'
	}
]
 */

const testData = {
  questions: [
    {
      id: 'some_id1',
      text: 'Your UI is shit',
    },
    {
      id: 'some_id_2',
      text: "Don't work for me at all",
    },
  ],
};

const Desktop = ({ surveys }) => {
  if (!surveys) return null;
  console.log(surveys);

  const [answers, setAnswers] = useState({});

  const { title, questions } = surveys; // TODO
  console.log(answers);

  const setSingleAnswer = id => value =>
    setAnswers({ ...answers, [id]: value });

  return (
    <div className={styles.Desktop}>
      <h1 className={styles.Title}>{title}</h1>
      <div className={styles.Illustration}>
        <img src={illustrationSrc} alt="illustration" />
      </div>
      <div className={styles.Survey}>
        <h2>Why did you uninstall my App?</h2>
        <p>Check all that apply:</p>
        <ul className={styles.CheckboxList}>
          {questions.map(question => {
            return (
              <Checkbox
                key={question.id}
                checked={answers[question.id] === true}
                label={question.text}
                onChange={setSingleAnswer(question.id)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Desktop;
