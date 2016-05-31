var React = require('react');

var Forecast = function(props) {
  return (
    <div>
      This is the forecast container!<br />
      <br />
      The city is: {props.city}<br />
      The current temperature is: {props.currentTemperature}<br />
    </div>
  )
};

module.exports = Forecast;
