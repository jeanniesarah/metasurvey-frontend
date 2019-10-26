import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

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

  return isMobile ? <Mobile surveys={surveys} /> : <Desktop surveys={surveys} />;
};

export default App;
