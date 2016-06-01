var React = require('react');

function ItemDay(props) {
  return (
    <div>
      <img src={'./app/images/weather-icons/' + props.day.icon + '.svg'} alt='Weather' /><br />
      {props.day.formattedDate}
    </div>
  );
}

function ListDays(day){
  return (
    <ItemDay key={day.key} day={day} />
  );
}

var Forecast = function(props) {
  return (
    props.isLoading
    ?
      <div style={{background: 'red',}}>Loading ... please wait!</div>
    :
      <div>
        <h1>{props.city}</h1>
        {props.days.map(ListDays)}
      </div>
  )
};

module.exports = Forecast;
