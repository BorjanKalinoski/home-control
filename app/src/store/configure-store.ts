import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import {authReducer, devicesReducer} from './reducers';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    auth: authReducer,
    devices: devicesReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
