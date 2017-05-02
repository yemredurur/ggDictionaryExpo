import React, { Component } from 'react';
import { View }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {Header, Button, Spinner} from './components/common';
import { createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import LoginForm from './components/LoginForm';
import PageList from './components/PageList';
import PageCreate from './components/PageCreate';
import PageEdit from './components/PageEdit';

export const Router = createRouter(() => ({
    login: () => LoginForm,
    pageList: () => PageList,
    pageCreate: () => PageCreate,
    pageEdit: () => PageEdit
}));

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCRzYJkZUwmbytSMzwAEESbk1Q4QHc1kcQ",
            authDomain: "ggdictionary-5af0b.firebaseapp.com",
            databaseURL: "https://ggdictionary-5af0b.firebaseio.com",
            projectId: "ggdictionary-5af0b",
            storageBucket: "ggdictionary-5af0b.appspot.com",
            messagingSenderId: "38957234162"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <NavigationProvider router={Router}>
                    <StackNavigation initialRoute="login" />
                </NavigationProvider>
            </Provider>
        )
    }
}

export default App;