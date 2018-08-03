import React from 'react';

import { Link } from 'react-router-dom';


const HomeButton = () => (
  <button type="button">
    <Link to="/">
      Home
    </Link>
  </button>
);

export default HomeButton;
