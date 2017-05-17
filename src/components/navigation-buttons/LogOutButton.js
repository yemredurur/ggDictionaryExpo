import React, { Component } from 'react';
import _ from 'lodash';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser, pagesFetch } from '../../actions';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from '@expo/ex-navigation';

@withNavigation
class LogOutButton extends Component {
    constructor(props) {
        super(props)
    }
    logoutFunc() {
        console.log(this.props);
        //this.props.logoutUser();
        //this.props.navigator.push('login');
    }
    render() {
        const props = this.props;
        return (
            <TouchableOpacity onPress={() => {  this.logoutFunc(); }}>
                <Ionicons style={styles.exitIcon} size={24} name="md-exit" />
            </TouchableOpacity>
        );
    }
}
const mapStateToProps = state => {
    const pages = _.map(state.pages, (val, uid) => {
        return { ...val, uid };
    });

    return { pages };
};

export default connect(mapStateToProps, {
    pagesFetch, logoutUser
})(LogOutButton);