import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { logger } from '../middleware'
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../reducers';

const isDebuggingInBrowser = __DEV__ && !!window.navigator.userAgent;

export default function configureStore(initialState) {
  let createStoreWithMiddleware = null;
  if (__DEV__) {
    createStoreWithMiddleware = applyMiddleware(
      ReduxThunk,
      ReduxPromise,
      logger
    )(createStore)
  } else {
    createStoreWithMiddleware = applyMiddleware(
      ReduxThunk,
      ReduxPromise
    )(createStore)
  }
  
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInBrowser) {
    window.store = store;
  }

  return store;
};
