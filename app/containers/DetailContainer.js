var React = require('react');
var Detail = require('../components/Detail');
var helper = require('../helpers/api');

var DetailContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      city: this.props.routeParams.city,
      currentTemperature: 0,
      day: {},
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

  // always get the current weather for the detail ... ignoring the date clicked
  getCurrentWeather: function(city) {
    return (
      helper.getCurrentWeather(city)
      .then(function(weatherData){
        if (!weatherData) {
          return;
        }
        var currentTemperature = weatherData.data.main.temp;
        var fahrenheit = currentTemperature * 1.8 + 32;
        var icon = weatherData.data.weather[0].icon;
        var today = new Date();
        var formattedDate = today.toDateString();
        this.setState({
          isLoading: false,
          day: {
            currentTemperature: fahrenheit,
            icon: icon,
            formattedDate: formattedDate,
          }
        })
        console.log("Current Temp: "+ this.state.currentTemperature);
      }.bind(this))
    );
  },

  render: function() {
    return (
      <Detail city={this.state.city} day={this.state.day} isLoading={this.state.isLoading} />
    );
  }
})

module.exports = DetailContainer;
