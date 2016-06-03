var React = require('react');

function ItemDay(props) {
  return (
    <div>
      <a onClick={props.onHandleDayClick}>
        <img src={'./app/images/weather-icons/' + props.day.icon + '.svg'} alt='Weather' /><br />
        {props.day.formattedDate}
      </a>
    </div>
  );
}

function ListDays(props) {
  return (
    <div>
      {props.days.map(function (day) {
        return <ItemDay key={day.key} day={day} onHandleDayClick={props.onHandleDayClick.bind(null, day)} />
      })}
    </div>
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
        <ListDays city={props.city} days={props.days} onHandleDayClick={props.onHandleDayClick} />
      </div>
  )
};

module.exports = Forecast;
