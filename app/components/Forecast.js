var React = require('react');

function ItemDay(props) {
  return (
    <div>
      {props.day.formattedDate} : {props.day.temp}
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
        This is the forecast container!<br />
        <br />
        The city is: {props.city}<br />
        {props.days.map(ListDays)}
      </div>
  )
};

module.exports = Forecast;
