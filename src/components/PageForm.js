import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import  { pageUpdate, pageCreate } from '../actions';
import {Select, Option} from "react-native-chooser";

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

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Select
                        onSelect = {value => this.props.pageUpdate({ prop: 'type', value })}
                        defaultText  = "Select Me Please"
                        style = {{borderWidth : 1, borderColor : "#dddddd"}}
                        textStyle = {{fontSize: 14}}
                        selected={this.props.type}
                        backdropStyle  = {{backgroundColor : "#fff"}}
                        optionListStyle = {{backgroundColor : "#F5FCFF", height: 160}}
                    >
                        <Option value = "Error">Error List</Option>
                        <Option value = "Dictionary">Dictionary</Option>
                        <Option value = "TodoList">To Do List</Option>
                        <Option value = "Notes">Notes</Option>

                    </Select>
                </View>
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