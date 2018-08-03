import React from 'react';
import { Route } from 'react-router-dom';

import EntryScreen from './EntryScreen';
import Content from './Content';
import Movies from './Movies';
import Genres from './Genres';

const App = () => (
  <div>
    <Route exact path="/" component={EntryScreen} />
    <Route
      path="/Movies"
      component={() => <Content componentToRender={Movies} />}
    />
    <Route
      path="/Genres"
      component={() => <Content componentToRender={Genres} />}
    />
  </div>
);

export default App;
