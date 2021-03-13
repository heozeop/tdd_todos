import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import RoutingList from './RoutingList';
import rootReducer, {rootSaga} from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
  ))
);

sagaMiddleware.run(rootSaga);

function Redux() {
  return (
    <Provider store={store}>
      <RoutingList />
    </Provider>
  )
}
export default Redux;