import {combineReducers} from "redux";

// 引入reducer 及actionCreator
import list from '../components/Home/PreviewListRedux';

export default combineReducers({
    list,
})

export * as listActions from '../components/Home/PreviewListRedux';