import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { pageUpdate, pageCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PageForm from './PageForm';


class PageCreate extends Component {

    componentWillMount() {
        console.log('componentWillMount ');
    }

    onButtonPress() {
        const { title, description, type } = this.props;
        this.props.pageCreate({ title, description, type: type || 'Error' });
    }

    render() {
        return (
            <Card>
                <PageForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ pageForm }) => {
    console.log(pageForm);
    const { title, description, type } = pageForm;
    return { title, description, type };
};

export default connect(mapStateToProps, {
    pageCreate, pageUpdate
})(PageCreate);