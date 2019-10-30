import {fromJS} from "immutable";
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    text: 'Home 组件'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.TEXT_TYPE:
            return state.set('text', 'HOME组件');
        default:
            return state;
    }
}