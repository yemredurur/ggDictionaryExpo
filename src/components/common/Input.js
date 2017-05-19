import React from 'react';
import { TextInput, View, Text }  from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline }) => {
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

export { Input };
