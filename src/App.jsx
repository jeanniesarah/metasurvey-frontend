/* global gtag */
import React from 'react';
import { get } from 'lodash';
import Mobile from './components/Mobile';
import Result from './components/Result';

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
    if (gtag) {
      gtag('event', 'submit');
    }

    fetch(
      `https://meta-survey-app.herokuapp.com/api/survey/${surveyId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    ).then(body => {
      if (gtag) {
        gtag('event', 'submit_success');
      }
      return setResult(body);
    });
  };

  if (!surveys) {
    fetch(
      `https://meta-survey-app.herokuapp.com/api/survey/${surveyId}`
    )
      .then(body => body.json())
      .then(setSurveys);
  }

  if (result) {
    return <Result result={result} user={get(surveys, 'user')} />;
  }

  return (
    <Mobile
      surveys={surveys}
      onSave={saveAnswersToServer}
      isMobile={isMobile}
    />
  );
  /* return isMobile ? (
    <Mobile surveys={surveys} onSave={saveAnswersToServer} isMobile={isMobile} />
  ) : (
    <Desktop surveys={surveys} onSave={saveAnswersToServer} />
  ); */
};

export default App;
