import React, { Component } from 'react';
import _ from 'lodash';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { pagesFetch, logoutUser } from '../actions';
import ListItem from './ListItem';
import {Button, CardSection} from './common';

class PageList extends Component {
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

    renderRow(pages) {
        return <ListItem pages={pages} />
    }

    logoutUser() {
        this.props.logoutUser();
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <CardSection>
                    <Button onPress={this.logoutUser.bind(this)}>
                        Log Out
                    </Button>
                </CardSection>
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