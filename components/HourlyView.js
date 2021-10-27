import React from 'react';
import { Text, StyleSheet, Image, View, ImageBackground } from 'react-native';

const transparent = require('../assets/transparent.png');

const HourlyView = props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={transparent} style={{ resizeMode: 'cover' }} opacity={0.2}>
                <Text style={styles.textTop}>{ props.hour }</Text>
                <Image source={ props.icon } style={{ width: 40, height: 40 }} />
                <Text style={styles.textBottom}>{ props.temperature }℃</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        fontSize: 12,
        tintColor: 'white',
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 15,
        width: 50,
        marginRight: 2,
    },
    textTop: {
        marginTop: 5,
        color: 'white',
    },
    textBottom: {
        marginBottom: 5,
        color: 'white',
    },
});

export default HourlyView;