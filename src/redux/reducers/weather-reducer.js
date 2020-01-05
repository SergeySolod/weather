import {fetchWeather} from "../../api/Api";

const SET_CITY = 'WeatherAPI/weather-reducer/SET_CITY';
const SET_COUNTRY = 'WeatherAPI/weather-reducer/SET_COUNTRY';
const SET_DESCRIPTION = 'WeatherAPI/weather-reducer/SET_DESCRIPTION';
const SET_MAIN = 'WeatherAPI/weather-reducer/SET_MAIN';
const SET_CELSIUS = 'WeatherAPI/weather-reducer/SET_CELSIUS';
const SET_TEMP_MAX = 'WeatherAPI/weather-reducer/SET_TEMP_MAX';
const SET_TEMP_MIN = 'WeatherAPI/weather-reducer/SET_TEMP_MIN';

let initialState = {
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: null,
    temp_min: null,
    description: "",
    error: false
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY: {
            return {...state, city: action.city}
        }
        case SET_COUNTRY: {
            return {...state, country: action.country}
        }
        case SET_MAIN: {
            return {...state, main: action.main}
        }
        case SET_CELSIUS: {
            return {...state, celsius: Math.floor(action.celsius - 273.15)}
        }
        case SET_TEMP_MAX: {
            return {...state, temp_max: Math.floor(action.temp_max - 273.15)}
        }
        case SET_TEMP_MIN: {
            return {...state, temp_min: Math.floor(action.temp_min - 273.15)}
        }
        case SET_DESCRIPTION: {
            return {...state, description: action.description}
        }
        default:
            return state;
    }
}

const setCity = (city) => ({type: SET_CITY, city});
const setCountry = (country) => ({type: SET_COUNTRY, country});
const setMain = (main) => ({type: SET_MAIN, main});
const setСelsius = (celsius) => ({type: SET_CELSIUS, celsius});
const setTempMax = (temp_max) => ({type: SET_TEMP_MAX, temp_max});
const setTempMin = (temp_min) => ({type: SET_TEMP_MIN, temp_min});
const setDescription = (description) => ({type: SET_DESCRIPTION, description});

export const fetchWeatherTC = (dispatch) => {
    return async (dispatch) => {
        let data = await fetchWeather();
        dispatch(setCity(data.name));
        dispatch(setCountry(data.sys.country));
        dispatch(setMain(data.weather[0].main));
        dispatch(setСelsius(data.main.temp));
        dispatch(setTempMax(data.main.temp_min));
        dispatch(setTempMin(data.main.temp_max));
        dispatch(setDescription(data.weather[0].description));
    }
}

export default weatherReducer