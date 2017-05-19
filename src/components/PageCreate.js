import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { pageUpdate, pageCreate } from '../actions';
import { CardSection } from './common';
import PageForm from './PageForm';
import {Card, Button} from 'react-native-elements';

class PageCreate extends Component {
    static route = {
        navigationBar: {
            title: 'Yeni Sayfa Oluştur',
            tintColor: '#000',
            color: '#000'
        }
    };

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
            <Card>
                <PageForm {...this.props} />
                <Button style={{marginTop: 20, width: "100%"}}  icon={{name: 'add'}}
                        onPress={this.onButtonPress.bind(this)} large backgroundColor="#2c98f1" title="Ekle" />
            </Card>
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