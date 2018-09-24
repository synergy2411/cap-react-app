var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var hashHistory =  ReactRouter.hashHistory;
var browserHistory =  ReactRouter.browserHistory;

var IndexRoute = ReactRouter.IndexRoute;
var App = require('./components/app');
var Index = require('./components/index');
var About = require('./components/about');
var Error = require('./components/error');



ReactDOM.render(  
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="about" component={About}/>
        <Route path="*" component={Error}/>
         </Route>
    </Router>, document.getElementById('app'));





