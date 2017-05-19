import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import {Grid, Col, Row, Button} from 'react-native-elements';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const {cardSectionStyle, textStyle, containerStyle} = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {} }
        >
            <View style={containerStyle}>
                <Grid style={cardSectionStyle}>
                    <Row>
                        <Text style={textStyle}>{children}</Text>
                    </Row>
                    <Row>
                        <Col>
                            <Button onPress={onAccept} icon={{name: 'check'}}  backgroundColor="#5ba71b" title="Evet" />
                        </Col>
                        <Col>
                            <Button onPress={onDecline} icon={{name: 'cancel'}}  backgroundColor="#dd1e31" title="Hayır" />
                        </Col>
                    </Row>
                </Grid>
            </View>
        </Modal>
    );
};


const styles = {
    cardSectionStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 120
    },
    textStyle: {
        flex:1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };