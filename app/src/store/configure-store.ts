import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import {authReducer, devicesReducer} from './reducers';
import rootSaga from "./root-saga";
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    auth: authReducer,
    devices: devicesReducer
});

console.log('ddstarting!');
export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);
