var React = require('react');
var Main = require("../containers/Main");

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
        <p style={styles.header}>Enter a City and State</p>
	<div>
		<input type="text" placeholder="St George, UT" />
	</div>
	<div>
		<button>Get Weather</button>
	</div>
    </div>

  )
}

module.exports = Home;

