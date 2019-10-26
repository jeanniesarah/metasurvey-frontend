import React, { useState } from 'react';
import Checkbox from './components/Checkbox';

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
			text: 'Your UI is shit'
		},
		{
			id: 'some_id_2',
			text: 'Don\'t work for me at all'
		}
	],
};

const Desktop = ({ surveys }) => {
	if (!surveys) return null;

	const [answers, setAnswers] = useState({});

	const { title, questions } = surveys;
	console.log('answers', answers);

	const setSingleAnswer = (id) => (value) => { setAnswers({ ...answers, [id]: value }); }
	const save = () => { console.log(answers); }

	return <div>
		<div>{ title }</div>
		<div>
			{questions.map(question => {
				return <Checkbox key={question.id}
								 checked={answers[question.id] === true}
								 label={question.text}
								 onChange={setSingleAnswer(question.id)}
				/>
			})}
		</div>
		<button onClick={save}>Save</button>
	</div>
};

export default Desktop;