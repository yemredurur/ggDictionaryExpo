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
const FADEIN_DURATION = 1500;

class LoginForm extends Component {
    componentWillMount() {
        const x = Math.round((SCREEN_WIDTH / 2)-80);
        const y = Math.round((SCREEN_HEIGHT / 2)-25);

        this.position = new Animated.ValueXY({ x: x, y: y});
        this.fadeAnim = new Animated.Value(0);

        Animated.timing(this.position, {
            toValue: { x: Math.round((SCREEN_WIDTH / 2)-80), y: 0 },
            duration: ANIMATION_DURATION
        }).start(() => {

            Animated.timing(this.fadeAnim, {
                toValue: 1,
                duration: FADEIN_DURATION,
                delay: 300
            }).start();
        });
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
            <View style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <Animated.View style={this.position.getLayout()}>
                        <Image
                            defaultSource={require('../assets/gglogo.png')}
                            source={{ cache: 'only-if-cached' }}
                            style={styles.imgStyle}
                        />
                    </Animated.View>
                    <Animated.View style={{opacity: this.fadeAnim}}>
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
                    </Animated.View>
                </View>
            </View>
        )
    }
}

const styles = {
    contentContainer: {
        height: 400,
        width: "100%"
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        marginTop: 40
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, success } = auth;
    return { email, password, error, loading, success };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);