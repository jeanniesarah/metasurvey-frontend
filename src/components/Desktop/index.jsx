import React, { useState } from 'react';
import Checkbox from './components/Checkbox';
import styles from './Desktop.module.css';
import illustrationSrc from './img.png';
import { generateAnswersPayload } from '../../lib/data';

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

const Desktop = ({ surveys, onSave }) => {
  if (!surveys) return null;

  const [answers, setAnswers] = useState({});
  const [textareaText, setTextareaText] = useState('');

  const { title, questions, showTextarea } = surveys;

  const setSingleAnswer = id => value => {
    setAnswers({ ...answers, [id]: value });
  };
  const save = () => {
    onSave(generateAnswersPayload(answers, textareaText, surveys));
  };

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
        {showTextarea && (
          <textarea
            value={textareaText}
            onChange={e => setTextareaText(e.target.value)}
            placeholder="Tell us what you think..."
          ></textarea>
        )}
        <button onClick={save}>Save</button>
      </div>
    </div>
  );
};

export default Desktop;
