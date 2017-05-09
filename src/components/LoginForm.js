import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {CardSection, Input, Spinner} from './common';
import {Card, Button} from 'react-native-elements';
import { Router, Store } from '../app';

class LoginForm extends Component {
    /**
     * This is where we can define any route configuration for this
     * screen. For example, in addition to the navigationBar title we
     * could add backgroundColor.
     */
    static route = {
        navigationBar: {
            title: 'Login',
            tintColor: '#000',
            color: '#000',
        },
    };
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser( { email, password } )
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} large backgroundColor="#2c98f1" title="Giriş Yap" />
        );
    }

    _goToScreen = name => () => {
        this.props.navigator.push(Router.getRoute(name));
    };

    render() {
        return (
            <Card>
                <Input
                    label="E-mail"
                    placeholder="email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                {this.renderButton()}
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);