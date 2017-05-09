import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { pageUpdate, pageCreate } from '../actions';
import { CardSection } from './common';
import PageForm from './PageForm';
import {Card, Button} from 'react-native-elements';

class PageCreate extends Component {

    componentWillMount() {
        //console.log('componentWillMount ');
    }

    onButtonPress() {
        const { title, description, type } = this.props;
        this.props.pageCreate({ title, description, type: type || 'Error' });
    }

    render() {
        return (
            <Card>
                <PageForm {...this.props} />
                <Button buttonStyle={{marginTop: 20}} onPress={this.onButtonPress.bind(this)} large backgroundColor="#2c98f1" title="Create" />
            </Card>
        )
    }
}

const mapStateToProps = ({ pageForm }) => {
    const { title, description, type } = pageForm;
    return { title, description, type };
};

export default connect(mapStateToProps, {
    pageCreate, pageUpdate
})(PageCreate);