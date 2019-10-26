import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import axios from 'axios';

const App = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => JSON.parse(response))
    .then(data => console.log(data));

  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default App;
