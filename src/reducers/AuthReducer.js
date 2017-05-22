import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false,
    success: false,
    logout: false
};

export  default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, logout: false };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, logout: false };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, success: true, logout: false };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Giriş Başarısız', password: '', loading: false, logout: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '', logout: false};
        case LOGOUT_USER:
            return { ...state, ...INITIAL_STATE, logout: true };
        default:
            return state;

    }
}