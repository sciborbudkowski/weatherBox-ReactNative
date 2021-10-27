import urls from './urls';
import secrets from './secrets';

export async function fetchUnsplashData(season) {
    const url = urls.apiUnsplashCom + '?client_id=' + secrets.apiUnsplashAccessKey + '&orientation=portrait&query=' + season;
    console.log(url);

    try {
        let response = await fetch(url);
        let json = await response.json();
        let data = {
            username: json.user.username,
            name: json.user.name,
            photos: json.user.links.photos,
            url: json.urls.regular,
        };
        console.log(data);
        
        return data;
    }
    catch(e) {
        console.error(e);
    }
}