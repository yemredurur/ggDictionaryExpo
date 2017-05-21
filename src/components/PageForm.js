import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Input, Button, SelectBox } from './common';
import { connect } from 'react-redux';
import  { pageUpdate, pageCreate } from '../actions';

class PageForm extends Component {
    static route = {
        navigationBar: {
            title: 'Yeni Sayfa',
            tintColor: '#000',
            color: '#000',
        },
    };

    render() {
        return (
            <View>
                <Input
                    label="Page Title"
                    placeholder="Title"
                    value={this.props.title}
                    onChangeText={value => this.props.pageUpdate({ prop: 'title', value })}
                />

                <Input
                    label="Page Detail"
                    placeholder="Details about the page"
                    multiline={true}
                    value={this.props.description}
                    onChangeText={value => this.props.pageUpdate({ prop: 'description', value })}
                />

                <SelectBox
                    label="Sayfa Tipi"
                    onSelect = {value => this.props.pageUpdate({ prop: 'type', value })}
                    defaultText  = {this.props.type}
                    style = {{borderWidth : 1, borderColor : "#dddddd"}}
                    textStyle = {{fontSize: 14}}
                    selected={this.props.type}
                    backdropStyle  = {{backgroundColor : "#fff"}}
                    optionListStyle = {{backgroundColor : "#F5FCFF", height: 160}}
                />
            </View>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 5
    }
};

const mapStateToProps = ({ pageForm }) => {
    const { title, description, type } = pageForm;
    return { title, description, type };
};

export default connect(mapStateToProps, {
    pageUpdate
})(PageForm);