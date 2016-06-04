React = require('react');

var Detail = function(props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <h3>{props.day.formattedDate}</h3>
      <h3>Current Temperature: {props.day.temp}</h3>
      <img src={'./app/images/weather-icons/' + props.day.icon + '.svg'} alt='Weather' /><br />
    </div>
  )
};

module.exports = Detail;
