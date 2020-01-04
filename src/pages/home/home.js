import React from 'react'

export const Home = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Приложение WeatherAPI</h1>
                <p className="lead">Для написания данного приложения были использованы следующие технологии: React (+библиотеки), Redux (+библиотеки), Bootstrap, Axios, SASS. Приложение красиво показывает погоду в любой стране, в любом городе. Только если вы живёте в Санкт-Петербурге, этим приложением можете не пользоваться, вы же итак знаете, что каждый день идёт дождь!
                </p>
                <p className="lead">
                    GitHub: https://github.com/SergeySolod/WeatherAPI
                </p>
            </div>
        </div>
    )
}