import * as axios from 'axios'

export const fetchWeather = async (city = 'Moscow', country='Russia') => {
    let response = await axios({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=429736441cf3572838aa10530929f7cd`,
        method: "get",
    })
    return response.data;
}