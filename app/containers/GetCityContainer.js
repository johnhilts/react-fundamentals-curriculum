var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column',
    }
  },

  render: function(){
    return (
    <GetCity direction={this.props.direction} />
    )
  }
});

module.exports = GetCityContainer;
