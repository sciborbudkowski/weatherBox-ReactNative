import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const UnsplashInfo = (props) => {
    console.log(props);
    return (
    <View>
        <View style={styles.line}>
            <Text style={styles.text}>Photo by </Text>
            <TouchableOpacity style={styles.urlContainer} onPress={() => {}}>
              <Text style={styles.url}>{props.data.name}</Text>
            </TouchableOpacity>
            <Text style={styles.text}> on </Text>
            <TouchableOpacity style={styles.urlContainer} onPress={() => {}}>
              <Text style={styles.url}>Unsplash</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'AvenirNextItalic',
        color: '#999',
        fontSize: 10,
    },
    urlContainer: {
        elevation: 10,
    },
    url: {
        fontFamily: 'AvenirNextItalic',
        color: '#ddd',
        fontSize: 10,
        textDecorationLine: 'underline',
    },
});

export default UnsplashInfo;