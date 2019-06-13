import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // Log das actions (prev, state, next)

import reducers from './ducks';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga); // A partir daqui todas sagas começam a serem ouvidas

export default store;
