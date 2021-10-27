import urls from './urls';
import secrets from './secrets';

export async function fetchWeatherData(lat, lon) {
    const url = urls.apiOpenWeatherOrg + '/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + secrets.apiOpenWeatherAppId + '&units=metric&exclude=minutely';

    try {
        let response = await fetch(url);
        let json = await response.json();
        let data = {
            temperature: Math.round(json.current.temp),
            humidity: json.current.humidity,
            sunrise: json.current.sunrise,
            sunset: json.current.sunset,
            feelsLike: json.current.feels_like,
            uvi: json.current.uvi,
            visibility: json.current.visibility,
            windSpeed: json.current.wind_speed,
            windDeg: json.current.wind_deg,
            weatherId: json.current.weather[0].id,
        };
        
        return data;
    }
    catch(e) {
        console.error(e);
    }
}