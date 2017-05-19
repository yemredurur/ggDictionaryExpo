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
    type: '',
    saved: false,
    created: false
};

export default (state = INITIAL_STATE, action) => {
    switch  (action.type) {
        case PAGE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case PAGE_CREATE:
            return { ...state, ...INITIAL_STATE, created: true };
        case PAGES_FETCH_SUCCESS:
            return INITIAL_STATE;
        case PAGE_DELETE_SUCCESS:
            return { ...state, ...INITIAL_STATE, saved: true };
        case PAGE_SAVE_SUCCESS:
            return { ...state, ...INITIAL_STATE, saved: true };
        default:
            return state;
    }
}