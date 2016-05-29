var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <h1>Main Container Header</h1>
	{this.props.children}
        <p>This can be the footer</p>
      </div>
    )
  }  
});

module.exports = Main;

