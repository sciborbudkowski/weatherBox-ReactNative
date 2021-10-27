const airType = (aqi) => {
    if(!aqi) {
        return { id: -1, name: '-', icon: require('../assets/transparent.png') };
    }

    const types = [
        { id: 1, name: 'Air Good',      icon: require('../assets/air_icons/air_good.png') },
        { id: 2, name: 'Air Fair',      icon: require('../assets/air_icons/air_moderate.png') } ,
        { id: 3, name: 'Air Moderate',  icon: require('../assets/air_icons/air_unhealthy.png') },
        { id: 4, name: 'Air Poor',      icon: require('../assets/air_icons/air_veryUnhealthy.png') },
        { id: 5, name: 'Air Very Poor', icon: require('../assets/air_icons/air_hazardous.png') },
    ];

    return types.filter((item) => item.id == aqi)[0];
};

export default airType;