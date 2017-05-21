import React, { Component } from 'react';
import { Text, View, Image, Animated, Dimensions } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Input, Spinner} from './common';
import { Router, Store } from '../app';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ANIMATION_DURATION = 1500;

class LoginForm extends Component {
    /**
     * This is where we can define any route configuration for this
     * screen. For example, in addition to the navigationBar title we
     * could add backgroundColor.
     */
    static route = {
        navigationBar: {
            title: 'Giriş Yap',
            tintColor: '#000',
            color: '#000',
        },
    };

    componentWillMount() {
        const x = Math.round((SCREEN_WIDTH / 2)-80);
        const y = Math.round((SCREEN_HEIGHT / 2)-25);
        this.position = new Animated.ValueXY({ x: x, y: y});
        Animated.timing(this.position, {
            toValue: { x: Math.round((SCREEN_WIDTH / 2)-80), y: 0 },
            duration: ANIMATION_DURATION
        }).start();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.success) {
            this.props.navigator.push('pageList');
        }
    }

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
            <Button onPress={this.onButtonPress.bind(this)} large backgroundColor="#0654ba" title="Giriş Yap" />
        );
    }

    render() {
        return (
            <View>
                <Animated.View style={this.position.getLayout()}>
                    <Image
                        defaultSource={require('../assets/gglogo.png')}
                        source={{ cache: 'only-if-cached' }}
                        style={styles.imgStyle}
                    />
                </Animated.View>
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
            </View>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    imgStyle: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        marginTop: 20
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, success } = auth;
    return { email, password, error, loading, success };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);