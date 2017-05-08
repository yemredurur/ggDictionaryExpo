import React, { Component } from 'react';
import { View }  from 'react-native';
import { Provider as ReduxProvider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import {Header, Button, Spinner} from './components/common';
import {
    NavigationContext,
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';

import Store from './Store';
import Router from './Router';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

//const Store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
        return (
            <NavigationProvider router={Router}>
                <ReduxProvider store={Store}>
                    <StackNavigation initialRoute={Router.getRoute('login')} />
                </ReduxProvider>
            </NavigationProvider>
        )
    }
}

export default App;