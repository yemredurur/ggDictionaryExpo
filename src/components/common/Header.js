/**
 * Created by ydurur on 23/03/17.
 */

import React from 'react';
import { Text, View }  from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = {
    alignCenter: {
        alignItems:'center',
        justifyContent: 'center'
    },
    textStyle : {
        fontSize: 20
    },
    viewStyle: {
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export { Header };