import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/auth';
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
