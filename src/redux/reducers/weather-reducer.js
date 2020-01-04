import {fetchWeather} from "../../api/Api";

const SET_WEATHER = 'WeatherAPI/weather-reducer/SET_WEATHER';

let initialState = {
    weather: []
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {...state, weather: action.weather}
        }
        default:
            return state;
    }
}

const setWeather = (weather) => ({type: SET_WEATHER, weather})

export const fetchWeatherTC = (dispatch) => {
    return async (dispatch) => {
        let data = await fetchWeather();
        dispatch(setWeather(data));
    }
}

export default weatherReducer