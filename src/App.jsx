import React from 'react';
import { isEmpty } from 'lodash';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

const saveSuccessTitle = 'Successfully saved survey results. Thank you!';
const saveErrorTitle = 'Something went wrong during saving';

const App = () => {
  const isMobile =
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1;
  const [surveys, setSurveys] = React.useState(undefined);
  const [result, setResult] = React.useState(undefined);

  const urlParams = new URLSearchParams(window.location.search);
  const surveyId = urlParams.get('survey_id');

  if (!surveyId) {
    window.location.replace('https://getmetasurvey.com');
  }

  const saveAnswersToServer = payload => {
    fetch(`https://meta-survey-app.herokuapp.com/api/survey/${surveyId}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(body => setResult(body));
  };

  if (!surveys) {
    fetch(
      `https://meta-survey-app.herokuapp.com/api/survey/${surveyId}`
    )
      .then(body => body.json())
      .then(setSurveys);
  }

  if (result) {
    alert(result.ok ? saveSuccessTitle : saveErrorTitle);
  }

  return isMobile ? (
    <Mobile surveys={surveys} onSave={saveAnswersToServer} />
  ) : (
    <Desktop surveys={surveys} onSave={saveAnswersToServer} />
  );
};

export default App;
