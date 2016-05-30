var React = require('react');
var GetCity = require('../components/GetCity');

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
