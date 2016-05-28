var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Weather App!</h1>
        <p className='lead'>React Fundamentals Cirriculum</p>
        <p>Modified by Mr John Hilts</p>
        <p>This is now the Main container</p>
	{this.props.children}
      </div>
    )
  }  
});

module.exports = Main;

