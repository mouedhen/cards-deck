import React, {Component} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
// import reduxPromise from 'redux-promise';
import {Provider} from 'react-redux';

import reducers from './reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const middleware = [];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

class Root extends Component {

  static defaultProps = {
    initialState: {},
  };

  store = createStore(
    reducers,
    this.props.initialState,
    enhancer,
  );

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default Root;
