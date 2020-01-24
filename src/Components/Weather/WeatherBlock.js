import React, {Component} from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import './weather-block.scss';

const WEATHER_API = '308d0107e4089de7204fd7df30d69715';

class WeatherBlock extends Component {

    state = {
        town: undefined,
        country: undefined,
        temp: undefined,
        feels_like: undefined,
        weather: undefined,
        wind: undefined,
        error: undefined
    }

    gettingWeather = async (event) => {
        event.preventDefault();
        let town = event.target.elements.town.value;
        let data;

        if (town.length > 3) {
            axios.get(`//api.openweathermap.org/data/2.5/weather?q=${town}&appid=${WEATHER_API}&units=metric`).then(function (response) {
                data = response.data;

                this.setState({
                    town: data.name,
                    country: data.sys.country,
                    temp: Math.round(data.main.temp),
                    feels_like: data.main.feels_like,
                    weather: data.weather[0].description,
                    wind: Math.round(data.wind.speed),
                    error: ""
                });
            }.bind(this));
        } else {
            this.setState({
                town: undefined,
                country: undefined,
                temp: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Put town to input"
            });
        }
    }

    render () {
        return (
            <div className="weather-block">
                <h2>Get weather in any town</h2>
                <WeatherForm errorMsg={this.state.error} getWeather={this.gettingWeather}/>

                { this.state.town &&
                    <div className="weather-block-info">
                        <div className="town info-field">
                            <strong>Town:</strong>
                            <span>{this.state.town}</span>
                        </div>
                        <div className="country info-field">
                            <strong>Country:</strong>
                            <span>{this.state.country}</span>
                        </div>
                        <div className="temp info-field">
                            <strong>Temperature:</strong>
                            <span>{this.state.temp} °C</span>
                        </div>
                        <div className="weather info-field">
                            <strong>Weather:</strong>
                            <span>{this.state.weather}</span>
                        </div>
                        <div className="wind info-field">
                            <strong>Wind speed:</strong>
                            <span>{this.state.wind} m/s</span>
                        </div>
                    </div>
                }
            </div>
        );
    }
};

export default WeatherBlock;