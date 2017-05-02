import React, { Component } from 'react';
import { View }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {Header, Button, Spinner} from './components/common';
/*import Router from './Router';*/
import LoginForm from './components/LoginForm';
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
                <LoginForm />
            </Provider>
        )
    }
}

export default App;