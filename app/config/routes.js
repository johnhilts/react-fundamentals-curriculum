var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require("../containers/Main");
var Home = require("../components/Home");
var ForecastContainer = require("../containers/ForecastContainer");
var DetailContainer = require("../containers/DetailContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
			<Route path='forecast/:city' header='Current Weather' component={ForecastContainer} />
			<Route path='detail/:city' header='Current Weather' component={DetailContainer} />
    </Route>
  </Router>
);

module.exports = routes;
