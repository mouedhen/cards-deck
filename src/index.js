import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import Home from './views/Home';
import * as serviceWorker from './serviceWorker';

import "./index.scss"

export default ReactDOM.render(
  <Root>
    <Home/>
  </Root>,
  document.getElementById('root') || document.createElement('div'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
