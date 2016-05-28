var React = require('react');
var Main = require("../containers/Main");

function Home (props) {
  return (
    <div>
        <p className='lead'>Enter a City and State</p>
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

