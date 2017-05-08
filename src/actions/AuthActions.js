import firebase from 'firebase';
/*import { Actions } from 'react-native-router-flux';*/
import { NavigationActions } from '@expo/ex-navigation'
import Store from '../Store';
import Router from '../Router'

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( user => loginUserSucces(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSucces(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER });
        firebase.auth().signOut();
        //Actions.auth({ type: 'reset' });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
};

const loginUserSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    let navigatorUID = Store.getState().navigation.currentNavigatorUID;
    console.log(navigatorUID);
    //NavigationActions.push(navigatorUID, Router.getRoute('pageList'));

    /*


    const nav = NavigationActions.navigate({
        routeName: 'PageList',
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    dispatch(nav);
    Actions.main();*/
};