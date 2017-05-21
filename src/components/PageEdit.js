import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
/*import Communications from 'react-native-communications';*/
import  { pageUpdate, pageSave, pageDelete } from '../actions';
import { Confirm } from './common';
import PageForm from './PageForm';
import { Grid, Col, Row, Button} from 'react-native-elements';

class PageEdit extends Component {
    static route = {
        navigationBar: {
            title: 'Sayfa Güncelleme',
            tintColor: '#000',
            color: '#000',
        },
    };
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.page, (value, prop) => {
            this.props.pageUpdate({ prop, value })
        });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.saved) {
            this.props.navigator.push('pageList');
        }
    }

    onButtonPress() {
        const { title, description, type } = this.props;
        this.props.pageSave({ title, description, type , uid: this.props.page.uid });
    }
/*
    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }*/

    fireEmployee() {
        this.setState({ showModal: !this.state.showModal });
    }

    onAccept() {
        this.setState({ showModal: false });
        this.props.pageDelete({ uid: this.props.page.uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <ScrollView>
            <View>
                <PageForm />
                <Grid>
                    <Col>
                        <Button style={styles.buttonWith} icon={{name: 'save'}}
                                onPress={this.onButtonPress.bind(this)} large backgroundColor="#0654ba" title="Kaydet" />
                    </Col>
                    <Col>
                        <Button style={styles.buttonWith} icon={{name: 'delete'}}
                                onPress={this.fireEmployee.bind(this)} large backgroundColor="#dd1e31" title="Sil" />
                    </Col>
                </Grid>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Bu sayfayı silmek istediğinize emin misiniz?
                </Confirm>
            </View>
            </ScrollView>
        )
    }
}

const styles = {
    buttonWith : {
        width: "100%"
    }
}

const mapStateToProps = ({ pageForm }) => {
    const { title, description, type, saved } = pageForm;
    return { title, description, type, saved };
};

export default connect(mapStateToProps, {
    pageUpdate, pageSave, pageDelete
})(PageEdit);