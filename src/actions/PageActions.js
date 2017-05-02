import firebase from 'firebase';
/*import { Actions } from 'react-native-router-flux';*/

import {
    PAGE_UPDATE,
    PAGE_CREATE,
    PAGES_FETCH_SUCCESS,
    PAGE_SAVE_SUCCESS,
    PAGE_DELETE_SUCCESS
} from './types';

export const pageUpdate = ({ prop, value }) => {
    return {
        type: PAGE_UPDATE,
        payload: { prop, value }
    };
};

export const pageCreate = ({ title, description, type }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        //firebase.database().ref(`pages/${currentUser.uid}`)
        firebase.database().ref(`pages/`)
            .push({ title, description, type, createdBy: currentUser.uid })
            .then(() => {
                dispatch({ type: PAGE_CREATE });
                //Actions.pageList({ type: 'reset' })
            });
    };
};

export const pagesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        //firebase.database().ref(`users/${currentUser.uid}/employees`)
        firebase.database().ref(`pages`)
            .on('value', snapshot => {
                dispatch({ type: PAGES_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};


export const pageSave = ({ title, description, type, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        //firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        firebase.database().ref(`pages/${uid}`)
            .set({ title, description, type })
            .then(() => {
                dispatch({ type: PAGE_SAVE_SUCCESS });
                //Actions.pageList({ type: 'reset' })
            });
    };
};

export const pageDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`pages/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: PAGE_DELETE_SUCCESS });
                //Actions.pageList({ type: 'reset' })
            });
    };
};