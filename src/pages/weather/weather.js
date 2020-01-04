import React, {useEffect} from 'react'
import {fetchWeatherTC} from "../../redux/reducers/weather-reducer";
import {getWeather} from "../../redux/selectors/weather-selector";
import {connect} from 'react-redux'

const Weather = (props) => {
    useEffect(() => {
        props.fetchWeatherTC();
    }, []);
    return (
        <div className='container'>
            <div className='cards'>
                <h1>Weather App</h1>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            weather: getWeather(state)
        }
    )
}

export default connect(mapStateToProps, {fetchWeatherTC})(Weather)