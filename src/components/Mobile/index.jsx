import React from 'react';
import Deck from './Deck';
const index = ({ surveys, onSave }) => {
  return <Deck surveys={surveys} onSave={onSave} />;
};

export default index;
