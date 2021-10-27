import * as Location from "expo-location";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function location() {
  const [isLocationDetermined, setLocationDetermined] = useState(false);
  const [locationDetails, setLocationDetails] = useState({});

  useEffect(() => {
    async function CheckIfLocationEnabled() {
      let enabled = await Location.hasServicesEnabledAsync();

      if (!enabled) {
        console.warn("permission denied");
      }
    }

    async function GetCurrentLocation() {
        try {
            SplashScreen.preventAutoHideAsync();

            await CheckIfLocationEnabled();
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
              console.warn("permission denied");
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
                setLocationDetails({ coords: coords, address: address });
              }
            }    
        }
        catch(e) {
            console.error(e);
        }
        finally {
            setLocationDetermined(true)
            SplashScreen.hideAsync();
        }
      }

      GetCurrentLocation();
  }, []);

  if(!isLocationDetermined) {
      return false;
  }
  return locationDetails;
}
