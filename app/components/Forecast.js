var React = require('react');

var Forecast = function(props) {
  return (
    props.isLoading
    ?
      <div style={{background: 'red',}}>Loading ... please wait!</div>
    :
      <div>
        This is the forecast container!<br />
        <br />
        The city is: {props.city}<br />
        The current temperature is: {props.currentTemperature}<br />
      </div>
  )
};

module.exports = Forecast;
