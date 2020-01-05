import React, {useEffect} from 'react'
import {fetchWeatherTC} from "../../redux/reducers/weather-reducer";
import {connect} from 'react-redux'
import WeatherInput from './weather-input'

const Weather = (props) => {
    useEffect(() => {
        props.fetchWeatherTC();
    }, []);

      return (
        <div className='container'>
            <WeatherInput fetchWeatherTC={props.fetchWeatherTC}/>
            <div className='cards'>
                <h1>{props.city} {props.country}</h1>
                <h5 className='py-4'><br/>
                    <i className='wi wi-day-sunny display-1'>
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
                <h6 className='py-3'>{props.description}</h6>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return (
        {
            city: state.weather.city,
            country: state.weather.country,
            main: state.weather.main,
            celsius: state.weather.celsius,
            temp_max: state.weather.temp_max,
            temp_min: state.weather.temp_min,
            description: state.weather.description
        }
    )
}

export default connect(mapStateToProps, {fetchWeatherTC})(Weather)