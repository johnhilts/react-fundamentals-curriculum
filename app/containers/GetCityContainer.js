var React = require('react');
var ReactRouter = require('react-router');
var GetCity = require('../components/GetCity');
var Forecast = require('../containers/ForecastContainer');
var helper = require('../helpers/api');

var GetCityContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

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
        this.context.router.push('/forecast/' + this.state.city);
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
