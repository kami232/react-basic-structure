import {createStore, compose, applyMiddleware} from 'redux'
// 使用 redux-thunk 进行异步操作
import thunk from 'redux-thunk';
import reducer from "./reducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // 使用 redux-thunk
    applyMiddleware(thunk)
);

const store = createStore(reducer, enhancer);

export default store;