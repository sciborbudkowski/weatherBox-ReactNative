export default function determineDayPart(sunrise, sunset) {
    const current = Math.floor(Date.now() / 1000);

    if(current > sunrise && current < sunset) {
        return('day');
    }

    return 'night';
};