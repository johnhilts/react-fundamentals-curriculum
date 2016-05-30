var React = require('react');

function getStyles(props){
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
  }
}

function GetCity(props) {
  return (
    <div style={getStyles(props)}>
    <input type="text" placeholder="St George, UT" value={props.city} onChange={props.onUpdateCity} />
    <button type="button" onClick={props.onSubmitCity}>Get Weather</button>
    </div>
  )
}

module.exports = GetCity;
