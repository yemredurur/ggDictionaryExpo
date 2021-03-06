import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import  { pageUpdate, pageCreate } from '../actions';
import { CardSection } from './common';
import PageForm from './PageForm';
import {Button} from 'react-native-elements';

class PageCreate extends Component {
    static route = {
        navigationBar: {
            title: 'Yeni Sayfa Oluştur',
            tintColor: '#000',
            color: '#000'
        }
    };

    componentWillMount() {
        _.each(this.props.page, (value, prop) => {
            this.props.pageUpdate({ prop, null });
        });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.created) {
            this.props.navigator.push('pageList');
        }
    }

    onButtonPress() {
        const { title, description, type } = this.props;
        this.props.pageCreate({ title, description, type: type || 'Error' });
    }

    render() {
        return (
            <View>
                <PageForm />
                <Button style={{marginTop: 20, width: "100%"}}  icon={{name: 'add'}}
                        onPress={this.onButtonPress.bind(this)} large backgroundColor="#0654ba" title="Ekle" />
            </View>
        )
    }
}

const mapStateToProps = ({ pageForm }) => {
    const { title, description, type, created } = pageForm;
    return { title, description, type, created };
};

export default connect(mapStateToProps, {
    pageCreate, pageUpdate
})(PageCreate);