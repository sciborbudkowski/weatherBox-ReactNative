import React from 'react';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';

const compass = require('../assets/compass.imageset/compass.png');
const needle = require('../assets/needle.imageset/needle.png');

const Compass = props => {
    return (
        <View style={{ ...styles.compassView, ...props.style }}>
            <ImageBackground source={compass} resizeMode='cover' style={ props.style }>
                <View style={styles.compassImageView}>
                    <Image source={needle} style={{ width: 50, height: 50, transform: [{rotate: props.angle}] }} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    compassImageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    compassView: {
        borderColor: 'white',
        borderWidth: 0,
    },
});

export default Compass;