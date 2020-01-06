import React, {useEffect} from 'react'
import {fetchWeatherTC} from "../../redux/reducers/weather-reducer";
import {
    getIcon,
    getCity,
    getCountry,
    getMain,
    getCelsius,
    getTempMax,
    getTempMin,
    getDescription
} from "../../redux/selectors/weather-selector";
import {connect} from 'react-redux'
import WeatherInput from './weather-input'

const Weather = (props) => {
    return (
        <div className='container'>
            <WeatherInput fetchWeatherTC={props.fetchWeatherTC}/>
            <div className='cards'>
                <h1>{props.city} {props.country}</h1>
                <h5 className='py-4'><br/>
                    <i className={`wi ${props.icon} display-1`}>
                    </i>
                </h5>
                <h1 className='py-2'>{props.celsius}&deg;</h1>
                <h3>
            <span className='px-4'>
               {props.temp_max}&deg;
            </span>
                    <span className='px-4'>
               {props.temp_min}&deg;
            </span>
                </h3>
                <h4 className='py-3'>{props.main}</h4>
                <h4 className='py-3'>{props.description}</h4>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return (
        {
            city: getCity(state),
            country: getCountry(state),
            icon: getIcon(state),
            main: getMain(state),
            celsius: getCelsius(state),
            temp_max: getTempMax(state),
            temp_min: getTempMin(state),
            description: getDescription(state)
        }
    )
}

export default connect(mapStateToProps, {fetchWeatherTC})(Weather)