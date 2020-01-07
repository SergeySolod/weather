import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../components/redux-form/formsControl";
import {maxLengthCreator, required} from '../../components/redux-form/validators'

const  maxLength30 = maxLengthCreator(30)

const WeatherInputText = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Введите город (например, London, Moscow, Helsinki)</label>
                <Field placeholder={'Название города'} name={'City'} validate={[required, maxLength30]} component={Input}
                       className="form-control"/>
            </div>
            <button className="btn btn-dark">Найти</button>
        </form>
    )
}

const WeatherInputReduxForm = reduxForm({form: 'WeatherInput'})(WeatherInputText)


const WeatherInput = (props) => {
    const onSubmit = (formData) => {
        props.fetchWeatherTC(formData.City)
    }
    return (
        <div>
            <h1 className="display-4">Узнать погоду</h1>
            <WeatherInputReduxForm onSubmit={onSubmit}/>
        </div>
    )
}



export default (WeatherInput);
