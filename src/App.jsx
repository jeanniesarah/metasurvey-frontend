import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const saveAnswersToServer = (payload) => {
  // TODO POST to server here
  console.log('payload', payload);
};

const App = () => {
  const isMobile =
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1;
  const [surveys, setSurveys] = React.useState(undefined);

  if (!surveys) {
    fetch(
      'https://meta-survey-app.herokuapp.com/api/survey/5db4294685535d7cc3ffa98d'
    )
      .then(body => body.json())
      .then(setSurveys);
  }

  return isMobile ? <Mobile surveys={surveys} onSave={saveAnswersToServer} /> : <Desktop surveys={surveys} onSave={saveAnswersToServer} />;
};

export default App;
