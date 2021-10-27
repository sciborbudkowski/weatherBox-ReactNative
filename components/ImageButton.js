import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const ImageButton = props => {
    return (
        <View>
            <TouchableOpacity>
                <Image source={props.source} style={props.style} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageButton;