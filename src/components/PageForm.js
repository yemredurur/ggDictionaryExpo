import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import  { pageUpdate, pageCreate } from '../actions';

class PageForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Page Title"
                        placeholder="Title"
                        value={this.props.title}
                        onChangeText={value => this.props.pageUpdate({ prop: 'title', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Page Detail"
                        placeholder="Details about the page"
                        multiline={true}
                        value={this.props.description}
                        onChangeText={value => this.props.pageUpdate({ prop: 'description', value })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerLabelStyle}>Page Type</Text>
                    <Picker
                        selectedValue={this.props.type}
                        onValueChange={value => this.props.pageUpdate({ prop: 'type', value })}
                        style={{ flex: 1, flexDirection: 'column'  }}
                    >
                        <Picker.Item label="Error List" value="Error" />
                        <Picker.Item label="Dictionary" value="Dictionary" />
                        <Picker.Item label="To Do List" value="TodoList" />
                    </Picker>
                </CardSection>
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