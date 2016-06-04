React = require('react');

var Detail = function(props) {
  return (
      props.isLoading
      ? <div style={{background: 'red',}} >L O A D I N G</div>
      :
    <div>
      <h1>{props.city}</h1>
      <h3>{props.day.formattedDate}</h3>
      <h3>Current Temperature: {props.day.currentTemperature}</h3>
      <img src={'./app/images/weather-icons/' + props.day.icon + '.svg'} alt='Weather' /><br />
    </div>
  )
};

module.exports = Detail;
