import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import App from './app';


const App = () => {
    return (
        <div>
            <div className="container">
                <ul className="nav navbar-nav navbar-default">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <h1>App Loaded !</h1>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
        </div>
    )
}

const Home = () => {
    return <h1>Home Component!</h1>
}

const Contact = () => {
    return <h1>Contact Component!</h1>
}
const Product = ({ match }) => {
    console.log(match);
    return (
        <div className="container">
            <h2>Select Language : </h2>
            <ul className="list-unstyled">
                <li>
                    <Link to={match.url + `/javascript`}>
                        JavaScript</Link>
                </li>
                <li>
                    <Link to={`${match.url}/angular`}>
                        Angular</Link>
                </li>
                <li>
                    <Link to={`${match.url}/node`}>
                        Node</Link>
                </li>
            </ul>
            <hr />
            <Route path={`${match.url}/:id`} component={Topic} />
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    )
}

const Topic = ({ match }) => {
    return <h3> Topic Selected : {match.params.id} </h3>
}
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

