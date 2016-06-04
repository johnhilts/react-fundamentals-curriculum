var React = require('react');
var ReactRouter = require('react-router');
var Forecast = require('../components/Forecast');
var helper = require('../helpers/api');

var ForecastContainer = React.createClass({

	// NOTE: contextTypes doesn't scale well, but ok for limited use such as with routers
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

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
          var icon = weatherData.data.list[i].weather[0].icon;
          days.push(
            {
              key: weatherData.data.list[i].dt,
              icon: icon,
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

  handleDayClick: function(day) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        day: day
      }
    })
  },

  render: function() {
    return (
      <Forecast
      city={this.state.city}
      isLoading={this.state.isLoading}
      onHandleDayClick={this.handleDayClick}
      currentTemperature={this.state.currentTemperature}
      days={this.state.days} />
    )
  }
});

module.exports = ForecastContainer;
