var React = require('react');

var Forecast = React.createClass({
  render: function() {
    return (
      <div>
        This is the forecast container!<br />
        <br />
        The city is: {this.props.routeParams.city}<br />
      </div>
    )
  }
});

module.exports = Forecast;
