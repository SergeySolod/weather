export const getIcon = (state) => {
    const iconId = state.weather.icon
    switch (true) {
        case iconId >= 200 && iconId < 232:
            return 'wi-thunderstorm'
            break;
        case iconId >= 300 && iconId <= 321:
            return 'wi-sleet'
            break;
        case iconId >= 500 && iconId <= 521:
            return 'wi-storm-showers'
            break;
        case iconId >= 600 && iconId <= 622:
            return 'wi-snow'
            break;
        case iconId >= 701 && iconId <= 781:
            return 'wi-fog'
            break;
        case iconId === 800:
            return 'wi-day-sunny'
            break;
        case iconId >= 801 && iconId <= 804:
            return 'wi-day-fog'
            break;
        default:
            return 'wi-day-fog'
    }
}

export const getCity = (state) => {
    return state.weather.city;
}

export const getCountry = (state) => {
    return state.weather.country;
}

export const getMain = (state) => {
    return state.weather.main;
}

export const getCelsius = (state) => {
    return state.weather.celsius;
}

export const getTempMax = (state) => {
    return state.weather.temp_max;
}

export const getTempMin = (state) => {
    return state.weather.temp_min;
}

export const getDescription = (state) => {
    return state.weather.description;
}