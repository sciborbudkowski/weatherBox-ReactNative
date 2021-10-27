import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = props => {
    return (
        <View style={{ ...styles.line, ...props.style }}></View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    line: {
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        marginVertical: 10,
        marginHorizontal: 20,
    },
});

export default HorizontalLine;