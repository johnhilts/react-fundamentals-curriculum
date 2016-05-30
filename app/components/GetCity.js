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
      <input type="text" placeholder="St George, UT" />
      <button>Get Weather</button>
    </div>
  )
}

module.exports = GetCity;
