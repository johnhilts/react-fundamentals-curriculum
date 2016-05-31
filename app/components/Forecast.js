var React = require('react');

function listDays(day){
  return (<div key={day.formattedDate}>{day.formattedDate} : {day.temp}</div>);
}

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
        {props.days.map(listDays)}
      </div>
  )
};

module.exports = Forecast;
