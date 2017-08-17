import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import WeatherFetch from '../reducers/reducer_weather';

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log(temps, pressures, humidities);

        return(
            <tr key={cityData.city.id}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    <Sparklines data={temps} limit={50} width={100} height={100} margin={5}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={pressures} limit={50} width={100} height={100} margin={5}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={humidities} limit={50} width={100} height={100} margin={5}>
                        <SparklinesLine color="orange" />
                    </Sparklines>
                </td>

            </tr>
        );
    }

    render() {
        return(
            <table className="table table-over">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
// function MapStateToProps(state){
//      return {weather : state.weather};
// }

// ==

function MapStateToProps({weather}){
    return {weather}
}


export default connect(MapStateToProps)(WeatherList);