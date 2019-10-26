import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const App = () => {
  const [surveys, setSurveys] = React.useState(undefined);

  if (!surveys) {
    fetch(
      'https://meta-survey-app.herokuapp.com/api/survey/5db4294685535d7cc3ffa98d'
    )
      .then(body => body.json())
      .then(setSurveys);
  }

  return (
    <>
      <Desktop />
      <Mobile surveys={surveys} />
    </>
  );
};

export default App;
