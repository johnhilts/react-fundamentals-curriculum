var React = require('react');
var ReactRouter = require('react-router');
var Forecast = require('../components/Forecast');
var helper = require('../helpers/api');

var ForecastContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      city: this.props.routeParams.city,
      currentTemperature: 0,
      days: [],
    }
  },

  componentDidMount: function() {
    this.getWeatherForecast(this.state.city);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      city: nextProps.routeParams.city,
    });
    this.getWeatherForecast(this.state.city);
  },

  getCurrentWeather: function(city) {
    return (
      helper.getCurrentWeather(city)
      .then(function(weatherData){
        if (!weatherData) {
          return;
        }
        var currentTemperature = weatherData.data.main.temp;
        var fahrenheit = currentTemperature * 1.8 + 32;
        this.setState({
          isLoading: false,
          currentTemperature: fahrenheit,
        })
        console.log("Current Temp: "+ this.state.currentTemperature);
      }.bind(this))
    );
  },

  getWeatherForecast: function(city) {
    return (
      helper.getWeatherForecast(city)
      .then(function(weatherData){
        if (!weatherData) {
          return;
        }
        var days = [];
        for (var i = 0; i < weatherData.data.list.length; i++) {
          var today = new Date();
          var numberOfDaysToAdd = i;
          today.setDate(today.getDate() + numberOfDaysToAdd);
          var formattedDate = today.toDateString();
          var temp = weatherData.data.list[i].temp.day;
          days.push(
            {
              key: weatherData.data.list[i].dt,
              formattedDate: formattedDate,
              temp: temp,
            }
          );
        }
        this.setState({
          isLoading: false,
          days: days,
        })
      }.bind(this))
    );
  },

  render: function() {
    return (
      <Forecast
      city={this.state.city}
      isLoading={this.state.isLoading}
      currentTemperature={this.state.currentTemperature}
      days={this.state.days} />
    )
  }
});

module.exports = ForecastContainer;
