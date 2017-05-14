import React, { Component } from 'react';
import _ from 'lodash';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { pagesFetch, logoutUser } from '../actions';
import { List, ListItem , SearchBar, Button } from 'react-native-elements';

class PageList extends Component {
    static route = {
        navigationBar: {
            title: 'Sayfa Listesi',
            tintColor: '#000',
            color: '#000',
        },
    };
    componentWillMount(){
        this.props.pagesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the new set of props that this component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ pages }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pages);
    }


    goToPageDetail({ page }) {
        console.log(1);
        console.log(page);
        this.props.navigator.push('pageEdit', {page: page } );
    }

    renderRow (rowData, sectionID) {
        const _this = this;
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.title}
                subtitle={rowData.type}
                avatar={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => { console.log(rowData); }}
            />
        )
    }

    logoutUser() {
        this.props.logoutUser();
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
                        renderRow={this.renderRow}
                    />

                <Button buttonStyle={{marginTop:20}} onPress={this.logoutUser.bind(this)} large backgroundColor="#2c98f1" title="Çıkış Yap" />
                </List>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const pages = _.map(state.pages, (val, uid) => {
        return { ...val, uid };
    });

    return { pages };
};

export default connect(mapStateToProps, {
    pagesFetch, logoutUser
})(PageList);