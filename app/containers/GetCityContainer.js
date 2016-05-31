var React = require('react');
var GetCity = require('../components/GetCity');
var helper = require('../helpers/api');

var GetCityContainer = React.createClass({

  getInitialState: function() {
    return {
      city: '',
    }
  },

  getDefaultProps: function() {
    return {
      direction: 'column',
    }
  },

  handleSubmitCity: function(e) {
    e.preventDefault();
    console.log("The city is: " + this.state.city);
    helper.getCurrentWeather(this.state.city)
      .then(function(weatherData){
        if (!weatherData) {
          return;
        }
        var currentTemperature = weatherData.data.main.temp;
        var fahrenheit = currentTemperature * 1.8 + 32;
        this.setState({
          currentTemperature: fahrenheit,
        })
        console.log("Current Temp: "+ this.state.currentTemperature);
      }.bind(this));
  },

  handleUpdateCity: function(e) {
    this.setState({
        city: e.target.value
      })
  },

  render: function(){
    return (
      <GetCity
        direction={this.props.direction}
        city={this.state.city}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity} />
    )
  }

});

module.exports = GetCityContainer;
