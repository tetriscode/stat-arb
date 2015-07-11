var React = require('react');
var Main = require('./../components/Main');
var Home = require('./../components/Home');
var Stock = require('./../components/Stock');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="stock" path="stock/:symbol" handler={Stock}/>
    <DefaultRoute handler={Home} />
  </Route>
);
