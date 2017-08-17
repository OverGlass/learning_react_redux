import axios from 'axios';

const API_KEY = 'b7fb34f7fdb2c71c1e0180a89d72a1e4';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
    const url = `${ROUTE_URL}&q=${city},fr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload : request

    }
}