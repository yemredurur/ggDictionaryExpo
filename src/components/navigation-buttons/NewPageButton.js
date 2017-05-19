import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { withNavigation } from '@expo/ex-navigation';

@withNavigation
class NewPageButton extends Component {
    constructor(props) {
        super(props)
    }
    addNewPage(){
        this.props.navigator.push('pageCreate');
    }
    render() {
        return (
            <Icon iconStyle={styles.pageEditIcon} size={24} type="foundation" name="page-add" onPress={() => this.addNewPage()} />
        );
    }
}
const styles = {
    pageEditIcon: {
        color: '#00a8d8',
        paddingRight: 10,
        paddingTop: 10
    }
};
export default NewPageButton;