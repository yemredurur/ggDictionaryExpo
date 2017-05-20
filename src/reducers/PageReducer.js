import {
    PAGES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { };
export default (state = INITIAL_STATE, action) => {
    switch  (action.type) {
        case PAGES_FETCH_SUCCESS:
            return { pageList: action.payload };
        default:
            return state;
    }
}