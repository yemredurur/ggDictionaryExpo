import {
    PAGE_UPDATE,
    PAGE_CREATE,
    PAGES_FETCH_SUCCESS,
    PAGE_SAVE_SUCCESS,
    PAGE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    title: '',
    description: '',
    type: ''
};

export default (state = INITIAL_STATE, action) => {
    switch  (action.type) {
        case PAGE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case PAGE_CREATE:
            return INITIAL_STATE;
        case PAGES_FETCH_SUCCESS:
            return INITIAL_STATE;
        case PAGE_DELETE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}