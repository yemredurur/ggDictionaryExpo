import React, { Component } from 'react';
import _ from 'lodash';
import { ListView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { pagesFetch, logoutUser } from '../actions';
import { Spinner} from './common';
import { List, ListItem , SearchBar, Button } from 'react-native-elements';
import LogOutButton from './navigation-buttons/LogOutButton';
import NewPageButton from './navigation-buttons/NewPageButton';

class PageList extends Component {
    static route = {
        navigationBar: {
            title: 'Sayfa Listesi',
            tintColor: '#000',
            color: '#000',
            renderRight: (route, props) =>  <NewPageButton />
        }
    };
    componentWillMount(){
        this.props.pagesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        // nextProps are the new set of props that this component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
        if (nextProps.logout) {
            this.props.navigator.push('login');
        }
    }

    createDataSource({ pageList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pageList);
    }

    renderRow (rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.title}
                subtitle={rowData.type}
                avatar={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => this.goToPageDetail(rowData)}
            />
        )
    }

    goToPageDetail(page){
        this.props.navigator.push('pageView', {page: page } );
    }

    logoutUser() {
        this.props.logoutUser();
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button buttonStyle={{marginTop:20}} onPress={this.logoutUser.bind(this)} large backgroundColor="#0654ba" title="Çıkış Yap" />
        );
    }

    render() {
        return (
            <View>
                <View style={{marginTop: 10, marginBottom: 0}}>
                    <SearchBar
                        lightTheme
                        clearIcon
                        placeholder='Ara...' />
                </View>
                <List>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </List>
                {this.renderButton()}
            </View>
        )
    }
}

const styles = {
    exitIcon: {
        color: '#00a8d8',
        paddingRight: 10,
        paddingTop: 10
    }
}


const mapStateToProps = ({ pages, auth }) => {
    const pageList = _.map(pages, (val, uid) => {
        return { ...val, uid };
    });

    const { logout } = auth;
    return { pageList, logout };
};

export default connect(mapStateToProps, {
    pagesFetch, logoutUser
})(PageList);