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
    }
  },

  componentDidMount: function() {
    this.getCurrentWeather(this.state.city);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      city: nextProps.routeParams.city,
    });
    this.getCurrentWeather(this.state.city);
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

  render: function() {
      return (
        <Forecast
          city={this.state.city}
          isLoading={this.state.isLoading}
          currentTemperature={this.state.currentTemperature} />
      )
  }
});

module.exports = ForecastContainer;
