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
                <h1>{props.city} {props.country}</h1>
                <h5 className='py-4'><br/>
                    <i className='wi wi-day-sunny display-1'>
                    </i>
                </h5>
                <h1 className='py-2'>25&deg;</h1>
                {minmaxTemp(24, 19)}
                <h4 className='py-3'>{props.main}</h4>
                <h6 className='py-3'>{props.description}</h6>
            </div>
        </div>
    )
}

const minmaxTemp = (min, max) => {
    return (
        <h3>
            <span className='px-4'>
                {min}&deg;
            </span>
            <span className='px-4'>
                {max}&deg;
            </span>
        </h3>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            city: state.weather.city,
            country: state.weather.country,
            main: state.weather.main,
            description: state.weather.description
        }
    )
}

export default connect(mapStateToProps, {fetchWeatherTC})(Weather)