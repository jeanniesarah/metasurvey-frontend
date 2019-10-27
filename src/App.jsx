import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const App = () => {
  const isMobile =
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1;
  const [surveys, setSurveys] = React.useState(undefined);

  const urlParams = new URLSearchParams(window.location.search);
  const surveyId = urlParams.get('survey_id');

  if (!surveyId) {
    window.location.replace('https://getmetasurvey.com');
  }

  const saveAnswersToServer = payload => {
    fetch(`https://meta-survey-app.herokuapp.com/api/survey/${surveyId}`, { method: 'POST', body: JSON.stringify(payload) })
        .then(() => document.location.href='https://getmetasurvey.com');
  };

  if (!surveys) {
    fetch(
      `https://meta-survey-app.herokuapp.com/api/survey/${surveyId}`
    )
      .then(body => body.json())
      .then(setSurveys);
  }

  return isMobile ? (
    <Mobile surveys={surveys} onSave={saveAnswersToServer} />
  ) : (
    <Desktop surveys={surveys} onSave={saveAnswersToServer} />
  );
};

export default App;
