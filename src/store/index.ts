import { rootState } from 'store/reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
// Saga (root)
import rootSagas from './sagas';
// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // SAGA
  sagaMiddleware
];

const store = createStore(
  rootState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// Saga (run)
sagaMiddleware.run(rootSagas);
export default store;
