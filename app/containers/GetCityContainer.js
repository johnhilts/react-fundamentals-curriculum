var React = require('react');
var ReactRouter = require('react-router');
var GetCity = require('../components/GetCity');
var Forecast = require('../containers/ForecastContainer');

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
    this.context.router.push('/forecast/' + this.state.city);
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
