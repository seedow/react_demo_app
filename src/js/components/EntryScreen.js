import React from 'react';
import { Link } from 'react-router-dom';

const mainButtons = ['movies', 'genres'];

const EntryScreen = () => (

  <div>
    { mainButtons.map(btn => (
      <Link to={`/${btn}`}>
        {btn.toUpperCase()}
      </Link>
    ))}
  </div>
);

export default EntryScreen;
