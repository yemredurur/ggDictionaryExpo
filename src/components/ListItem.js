import React, { Component } from 'react';
//import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity, View } from 'react-native';
import { CardSection, ContainerSection } from './common';

class ListItem extends  Component {
    onRowPress() {
        //Actions.pageEdit({ page: this.props.pages });
    }

    render() {
        const { title, description, type } = this.props.pages;

        return (
            <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <ContainerSection>
                        <Text style={styles.titleStyle}>
                            {title} - {type}
                        </Text>
                        </ContainerSection>
                        <ContainerSection>
                            <Text style={styles.descStyle}>
                                {description}
                            </Text>
                        </ContainerSection>
                    </CardSection>
                </View>
            </TouchableOpacity>
        )
    };
}


const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    },
    descStyle: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15
    }
}

export default ListItem;