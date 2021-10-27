const windType = (min, max, scale) => {
    if(!min || !max || !scale) {
        return { minMetric: -1, maxMetric: -1, minImperial: -1, maxImperial: -1, icon: require('../assets/transparent.png'), name: '-', beaufort: -1 };
    }

    const types = [
        { minMetric: 0,    maxMetric: 0.5,  minImperial: 0,  maxImperial: 1,    icon: require("wind_calm.png"),           name: "Calm",            beaufort: 0  },
        { minMetric: 0.5,  maxMetric: 1.5,  minImperial: 1,  maxImperial: 3,    icon: require("wind_lightAir.png"),       name: "Light Air",       beaufort: 1  },
        { minMetric: 1.5,  maxMetric: 3.3,  minImperial: 3,  maxImperial: 7,    icon: require("wind_lightBreeze.png"),    name: "Light Breeze",    beaufort: 2  },
        { minMetric: 3.3,  maxMetric: 5.5,  minImperial: 7,  maxImperial: 12,   icon: require("wind_gentleBreeze.png"),   name: "Gentle Breeze",   beaufort: 3  },
        { minMetric: 5.5,  maxMetric: 7.9,  minImperial: 12, maxImperial: 18,   icon: require("wind_moderateBreeze.png"), name: "Moderate Breeze", beaufort: 4  },
        { minMetric: 7.9,  maxMetric: 10.7, minImperial: 18, maxImperial: 24,   icon: require("wind_freshBreeze.png"),    name: "Fresh Breeze",    beaufort: 5  },
        { minMetric: 10.7, maxMetric: 13.8, minImperial: 24, maxImperial: 31,   icon: require("wind_strongBreeze.png"),   name: "Strong Breeze",   beaufort: 6  },
        { minMetric: 13.8, maxMetric: 17.1, minImperial: 31, maxImperial: 38,   icon: require("wind_highWind.png"),       name: "High Wind",       beaufort: 7  },
        { minMetric: 17.1, maxMetric: 20.7, minImperial: 38, maxImperial: 46,   icon: require("wind_gale.png"),           name: "Gale",            beaufort: 8  },
        { minMetric: 20.7, maxMetric: 24.4, minImperial: 46, maxImperial: 54,   icon: require("wind_strongGale.png"),     name: "Strong Gale",     beaufort: 9  },
        { minMetric: 24.4, maxMetric: 28.4, minImperial: 54, maxImperial: 63,   icon: require("wind_storm.png"),          name: "Storm",           beaufort: 10 },
        { minMetric: 28.4, maxMetric: 32.6, minImperial: 63, maxImperial: 72,   icon: require("wind_violentStorm.png"),   name: "Violent Storm",   beaufort: 11 },
        { minMetric: 32.6, maxMetric: 100,  minImperial: 72, maxImperial: 1000, icon: require("wind_hurricaneForce.png"), name: "Hurricane Force", beaufort: 12 },
    ];

    if(scale == 'metric') {
        return types.filter((item) => item.minMetric >= min && item.maxMetric < max)[0];
    }
    if(scale == 'imperial') {
        return types.filter((item) => item.minImperial >= min && item.maxImperial < max)[0];
    }

    return { minMetric: -1, maxMetric: -1, minImperial: -1, maxImperial: -1, icon: require('../assets/transparent.png'), name: '-', beaufort: -1 };
};

const windDirection = (angle) => {
    if(!angle) {
        return { angle1: -1, angle2: -2, name: '-' };
    }

    const angles = [
        { angle1: 349, angle2: 12 , name: "N" },
        { angle1: 12 , angle2: 34 , name: "NNE" },
        { angle1: 34 , angle2: 57 , name: "NE" },
        { angle1: 57 , angle2: 79 , name: "ENE" },
        { angle1: 79 , angle2: 101, name: "E" },
        { angle1: 101, angle2: 124, name: "ESE" },
        { angle1: 124, angle2: 146, name: "SE" },
        { angle1: 146, angle2: 169, name: "SSE" },
        { angle1: 169, angle2: 191, name: "S" },
        { angle1: 191, angle2: 214, name: "SSW" },
        { angle1: 214, angle2: 236, name: "SW" },
        { angle1: 236, angle2: 259, name: "WSW" },
        { angle1: 259, angle2: 281, name: "W" },
        { angle1: 281, angle2: 304, name: "WNW" },
        { angle1: 204, angle2: 326, name: "NW" },
        { angle1: 326, angle2: 349, name: "NNW" },
    ];

    return angles.filter((item) => item.angle1 > angle1 && item.angle2 <= angle2)[0].name;
}

export default windType;
export default windDirection;