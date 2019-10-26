import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import styles from './Survey.module.css';
import { generateAnswersPayload } from 'lib/data';

const Survey = ({ surveys, onSave }) => {
  const [answers, setAnswers] = useState({});
  const [textareaText, setTextareaText] = useState('');
  const { questions, showTextarea } = surveys;

  const setSingleAnswer = id => value => {
    setAnswers({ ...answers, [id]: value });
  };

  const save = () => {
    onSave(generateAnswersPayload(answers, textareaText, surveys));
  };

  return (
    <div className={styles.Survey}>
      <h2 className={styles.title}>Why did you uninstall my App?</h2>
      <p>Check all that apply:</p>

      <ul className={styles.CheckboxList}>
        {questions.map(question => (
          <Checkbox
            key={question.id}
            checked={answers[question.id] === true}
            label={question.text}
            onChange={setSingleAnswer(question.id)}
          />
        ))}
      </ul>

      {showTextarea && (
        <textarea
          className={styles.TextFeedback}
          value={textareaText}
          onChange={e => setTextareaText(e.target.value)}
          placeholder="Tell us what you think..."
        ></textarea>
      )}

      <button className={styles.Submit} onClick={save}>
        Send
      </button>
    </div>
  );
};

export default Survey;
