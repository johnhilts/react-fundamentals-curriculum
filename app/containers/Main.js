var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Main Container Header</h1>
	{this.props.children}
        <p>This can be the footer</p>
      </div>
    )
  }  
});

module.exports = Main;

