import React from 'react';
import { TextInput, View, Text }  from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline }) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View>
            <FormLabel >
                {label}
            </FormLabel>
            <FormInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                multiline = {multiline}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}

            />
        </View>
    )
};

const styles = {
    inputStyle : {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
