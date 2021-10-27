import urls from './urls';
import secrets from './secrets';

export async function fetchAirData(lat, lon) {
    const url = urls.apiOpenWeatherOrg + '/air_pollution?lat=' + lat + '&lon=' + lon + '&appid=' + secrets.apiOpenWeatherAppId;

    try {
        let response = await fetch(url);
        let json = await response.json();
        let data = {
            aqi: json.list[0].main.aqi,
            no: json.list[0].components.no,
            no2: json.list[0].components.no2,
            o3: json.list[0].components.o3,
            so2: json.list[0].components.so2,
            pm2_5: json.list[0].components.pm2_5,
            pm10: json.list[0].components.pm10,
            nh3: json.list[0].components.nh3,
            co: json.list[0].components.co,
        };

        return data;
    }
    catch(e) {
        console.log(e);
        return { success: false };
    }
}