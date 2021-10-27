import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Animated, Button } from "react-native";

import ImageButton from "./ImageButton";
import HorizontalLine from "./HorizontalLine";
import HourlyView from "./HourlyView";
import Compass from "./Compass";
import DailyView from "./DailyView";

const dummyIcon = require("../assets/weather_icons/weather_thunderstormRain_day.png");
const iconWindFreshBreeze = require("../assets/wind_icons/wind_freshBreeze.png");
const iconWindLightAir = require("../assets/wind_icons/wind_lightAir.png");

const leftTopButton = require("../assets/menu_button.png");
const rightTopButton = require("../assets/info_button.png");

import airType from '../models/airModel';
import weatherType from '../models/weatherModel';
import * as Unsplash from '../src/unsplashData';
import determineDayPart from '../src/dayPart';

const MainView = (props) => {
  const [weatherIcon, setWeatherIcon] = useState();
  const [airIcon, setAirIcon] = useState();
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    const p = determineDayPart(props.weatherData.sunrise, props.weatherData.sunset);
    let weatherIconResource = require('../assets/transparent.png');

    if(p === 'day') {
      weatherIconResource = weatherType(props.weatherData.weatherId).iconDay;
    }
    else {
      weatherIconResource = weatherType(props.weatherData.weatherId).iconNight;
    }
    setWeatherIcon(weatherIconResource);

    let airIconResource = require('../assets/transparent.png');
    airIconResource = airType(props.airData.aqi).icon;
    setAirIcon(airIconResource);

    (async () => {
      const firstBackground = await Unsplash.fetchUnsplashData('autumn');
      setBackgroundImage(firstBackground.url);
    })();
  }, [props.weatherData.weatherId]);

  useEffect(() => {
    (async () => {
      const interval = setInterval(async () => {
        const uData = await Unsplash.fetchUnsplashData('autumn');
        setBackgroundImage(uData.url);
      }, 10000000);

      return () => clearInterval(interval);
    })();
  }, []);

  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0.2,
      timing: 2500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    });
  };
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{ uri: backgroundImage }}
          opacity={0.2}
          style={styles.imageBackground}
        >
          <View style={styles.topPanel}>
            <ImageButton source={leftTopButton} style={styles.topButton} />
            <Text style={styles.placeNameText}>{props.locationInfo.address}</Text>
            <ImageButton source={rightTopButton} style={styles.topButton} />
          </View>
          <View style={styles.weatherPanel}>
            <Text style={styles.weatherAndAirText}>{weatherType(props.weatherData.weatherId).name}</Text>
            <Text style={styles.weatherAndAirText}>{airType(props.airData.aqi).name}</Text>
          </View>
          <View style={styles.weatherPanel}>
          <Image source={weatherIcon} style={styles.mainIcon} />
            <Image source={airIcon} style={styles.mainIcon} />
          </View>
          <View style={styles.weatherPanel}>
            <View style={styles.weatherValuePanel}>
              <Text style={styles.temperatureAndAqiText}>{props.weatherData.temperature}</Text>
              <Text style={styles.unitsText}>℃</Text>
            </View>
            <View style={styles.weatherValuePanel}>
              <Text style={styles.temperatureAndAqiText}>{props.airData.aqi}</Text>
              <Text style={styles.unitsText}>aqi</Text>
            </View>
          </View>
          <HorizontalLine />
          <ScrollView style={styles.hourlyView} horizontal={true}>
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
            <HourlyView
              hour="14:00"
              icon={dummyIcon}
              temperature="17"
            />
          </ScrollView>
          <HorizontalLine />
          <View style={styles.weatherPanel}>
            <Image source={iconWindFreshBreeze} style={styles.mainIcon} />
            <View style={styles.airPanel}>
              <Text style={styles.weatherAndAirText}>Wind: Fresh Breeze</Text>
              <Text style={styles.weatherAndAirText}>Speed: 0.9 m/s</Text>
              <Text style={styles.weatherAndAirText}>Direction: NE</Text>
              <Text style={styles.weatherAndAirText}>Visibility: 5 km</Text>
              <Text style={styles.weatherAndAirText}>Pressure: 1011 hPa</Text>
            </View>
            <Compass style={styles.mainIcon} angle="47deg" />
          </View>
          <HorizontalLine />
          <ScrollView style={{ marginHorizontal: 20 }}>
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
            <DailyView
              day="Wednesday"
              rainPreciption="0"
              weatherIcon={dummyIcon}
              windSpeed="7"
              windIcon={iconWindLightAir}
              dayTemp="16"
              nightTemp="4"
            />
          </ScrollView>
          <HorizontalLine />
          <View style={{ height: 100 }}></View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    resizeMode: "cover",
  },
  topPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 50,
    zIndex: 2,
    opacity: 1,
  },
  placeNameText: {
    fontFamily: "AvenirNextRegular",
    color: "white",
    fontSize: 18,
  },
  noOpacity: {
    opacity: 1,
  },
  topButton: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  weatherPanel: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  weatherValuePanel: {
    flexDirection: "row",
    alignSelf: "center",
  },
  weatherAndAirText: {
    fontFamily: "AvenirNextRegular",
    fontSize: 12,
    color: "white",
  },
  temperatureAndAqiText: {
    fontFamily: "AvenirNextUltraLight",
    fontSize: 80,
    color: "white",
  },
  unitsText: {
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    color: "white",
  },
  mainIcon: {
    width: 100,
    height: 100,
    tintColor: "white",
  },
  hourlyView: {
    marginHorizontal: 20,
  },
  airPanel: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainView;
