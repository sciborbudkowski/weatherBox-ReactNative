import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MainView from './components/MainView';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as AirData from './src/airData';
import * as WeatherData from './src/weatherData';
import UnsplashInfo from './components/UnsplashInfo';

export default function App() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [airData, setAirData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    ( async () => {
      let enabled = await Location.hasServicesEnabledAsync();

      if (!enabled) {
        console.warn("permission denied");
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') {
        console.log('Permission to access location was denied.');
      }

      let { coords } = await Location.getCurrentPositionAsync();
      if (coords) {
        const { latitude, longitude } = coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
  
        for (let item of response) {
          let address = `${item.city}, ${item.country}`;
          setCurrentLocation({ coords: coords, address: address });
        }

        let data1 = await AirData.fetchAirData(coords.latitude, coords.longitude);
        setAirData(data1);

        let data2 = await WeatherData.fetchWeatherData(coords.latitude, coords.longitude);
        setWeatherData(data2);
      }
    })();

    ( async () => {
      await Font.loadAsync({
        'AvenirNextBold': require('./assets/font_AvenirNext/AvenirNext-Bold-01.ttf'),
        'AvenirNextDemiBold': require('./assets/font_AvenirNext/AvenirNext-DemiBold-03.ttf'),
        'AvenirNextHeavy': require('./assets/font_AvenirNext/AvenirNext-Heavy-09.ttf'),
        'AvenirNextMedium': require('./assets/font_AvenirNext/AvenirNext-Medium-06.ttf'),
        'AvenirNextRegular': require('./assets/font_AvenirNext/AvenirNext-Regular-08.ttf'),
        'AvenirNextUltraLight': require('./assets/font_AvenirNext/AvenirNext-UltraLight-11.ttf'),
        'AvenirNextItalic': require('./assets/font_AvenirNext/AvenirNext-Italic-05.ttf'),
      });
      setResourcesLoaded(true);
    })();
  }, []);

  if(resourcesLoaded && currentLocation && airData && weatherData) {
    return (
      <MainView locationInfo={currentLocation} airData={airData} weatherData={weatherData} />
    );
    //<SafeAreaView style={styles.container}>
    //<UnsplashInfo data={{username: 'hgeeety290', name: 'Tom Hanx', photos: 'https://unsplash.com/user?id=hgeeety290'}} />
    //</SafeAreaView>

  }
  else {
    return (
      <AppLoading />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: '#000',
  },
});