var React = require('react');

var Forecast = function(props) {
  return (
    <div>
      This is the forecast container!<br />
      <br />
      The city is: {props.city}<br />
    </div>
  )
};

module.exports = Forecast;
