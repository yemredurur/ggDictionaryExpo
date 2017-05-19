import React from 'react';
import { TextInput, View, Text }  from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import {Select, Option} from "react-native-chooser";

const SelectBox = ({ label, onSelect, defaultText, style, textStyle, selected, backdropStyle, optionListStyle, selectionList }) => {
    return (
        <View>
            <FormLabel >
                {label}
            </FormLabel>
            <View style={styles.selectBoxContainer}>
                <Select
                    onSelect = {onSelect}
                    defaultText  = {defaultText}
                    style = {style}
                    textStyle = {textStyle}
                    selected={selected}
                    backdropStyle  = {backdropStyle}
                    optionListStyle = {optionListStyle}
                >
                    <Option value = "Error">Error List</Option>
                    <Option value = "Dictionary">Dictionary</Option>
                    <Option value = "TodoList">To Do List</Option>
                    <Option value = "Notes">Notes</Option>

                </Select>
            </View>
        </View>
    )
};

const styles = {
    selectBoxContainer: {
        width: "100%",
        padding: 20
    }
}

export { SelectBox };
