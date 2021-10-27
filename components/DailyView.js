import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const DailyView = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.day}</Text>
            <Text style={styles.text}>{props.rainPreciption}%</Text>
            <Image source={props.weatherIcon} style={styles.image} />
            <Text style={styles.text}>{props.windSpeed} m/s</Text>
            <Image source={props.windIcon} style={styles.image} />
            <Text style={styles.text}>{props.dayTemp}℃</Text>
            <Text style={{ fontSize: 12, color: '#777' }}>{props.nightTemp}℃</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 16,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 8,
    },
    text: {
        fontFamily: 'AvenirNextRegular',
        fontSize: 12,
        color: 'white',
    },
    image: {
        width: 12,
        height: 12,
    },
});

export default DailyView;