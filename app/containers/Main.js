var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  header: {
    background: 'orange',
  },
  container: {
    width: '100%',
    height: '92%'
  }
}

function Main(props) {
    return (
      <div>
        <div style={styles.header}>
          <h1>Clever Header</h1>
          <GetCityContainer direction='row' />
        </div>
        <div style={styles.container}>
          {props.children}
        </div>
        <div>
          <p>This can be the footer</p>
        </div>
      </div>
    )
};

module.exports = Main;
