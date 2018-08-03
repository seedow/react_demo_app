import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import App from './components/App';


const entryElement = document.getElementById('app');
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
      {/*<Route exact={true} path={"/"} component={App}/>*/}
    </Router>
  </Provider>,
  entryElement,
);
