import React from 'react';
import Deck from './Deck';
const index = ({ surveys, onSave, isMobile }) => {
  return <Deck surveys={surveys} onSave={onSave} isMobile={isMobile} />;
};

export default index;
