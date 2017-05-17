import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import  { pageUpdate, pageSave, pageDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import { Avatar } from 'react-native-elements';
import { Foundation } from '@expo/vector-icons';
import { withNavigation } from '@expo/ex-navigation';

@withNavigation
class EditButton extends Component {
    constructor(props) {
        super(props)
    }
    goToPageEdit(page){
        this.props.navigator.push('pageEdit', {page: page } );
    }
    render() {
        const pageItem = this.props.page;
        return (
            <TouchableOpacity onPress={() => this.goToPageEdit(pageItem)}>
                <Foundation style={styles.pageEditIcon} size={24} name="page-edit" />
            </TouchableOpacity>
        );
    }
}

class PageView extends Component {
    state = { showModal: false };

    static route = {
        navigationBar: {
            title: '10:30',
            tintColor: '#000',
            color: '#000',
            renderRight: (route, props) =>  <EditButton page={route.params.page} />
        }
    };

    componentWillMount() {
        _.each(this.props.page, (value, prop) => {
            this.props.pageUpdate({ prop, value })
        });
    }

    render() {
        const { title, description, type } = this.props;
        return (
            <View>
                <View style={styles.pageInfoContainer}>
                    <Avatar
                        small
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                        activeOpacity={0.7}
                        style={styles.avatarStyle}
                    />
                    <Text style={styles.authorTitle}>Yusuf Emre Durur</Text>
                    <Text style={styles.typeText}>{type}</Text>
                    <Text style={styles.pageTitle}>{title}</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text>{description}</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    pageInfoContainer: {
        padding: 20,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff',
        height: '30%',
        width: '100%'
    },
    avatarStyle: {
        paddingBottom: 20,
        paddingTop: 20,
        height: 34,
        width: 34,
        alignSelf: 'center'
    },
    authorTitle: {
        color: '#00a8d8',
        textAlign: 'center',
        paddingBottom: 5
    },
    typeText: {
        color: '#cacaca',
        textAlign: 'center',
        paddingBottom: 20
    },
    pageTitle: {
        fontSize: 32,
        textAlign: 'center'
    },
    descContainer: {
        backgroundColor: '#f4f4f4',
        padding: 20,
        height: '70%'
    },
    description: {
        fontSize: 14,
        lineHeight: 16
    },
    pageEditIcon: {
        color: '#00a8d8',
        paddingRight: 10,
        paddingTop: 10
    }
};


const mapStateToProps = ({ pageForm }) => {
    const { title, description, type } = pageForm;
    return { title, description, type };
};

export default connect(mapStateToProps, {
    pageUpdate, pageSave, pageDelete
})(PageView);