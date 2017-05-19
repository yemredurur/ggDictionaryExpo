import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
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
            <Icon iconStyle={styles.pageEditIcon} size={24} type="foundation" name="page-edit" onPress={() => this.goToPageEdit(pageItem)} />
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
export default EditButton;