import * as Font from 'expo-font';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function init() {
    const [isInitialized, setInitialized] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDetermineLocation() {
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    'AvenirNextBold': require('../assets/font_AvenirNext/AvenirNext-Bold-01.ttf'),
                    'AvenirNextDemiBold': require('../assets/font_AvenirNext/AvenirNext-DemiBold-03.ttf'),
                    'AvenirNextHeavy': require('../assets/font_AvenirNext/AvenirNext-Heavy-09.ttf'),
                    'AvenirNextMedium': require('../assets/font_AvenirNext/AvenirNext-Medium-06.ttf'),
                    'AvenirNextRegular': require('../assets/font_AvenirNext/AvenirNext-Regular-08.ttf'),
                    'AvenirNextUltraLight': require('../assets/font_AvenirNext/AvenirNext-UltraLight-11.ttf'),
                });
            }
            catch(e) {
                console.error(e);
            }
            finally {
                setInitialized(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDetermineLocation();
    }, []);

    return isInitialized;
}