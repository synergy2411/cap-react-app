var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
    render:function(){
        return (
            <div>
                <h1>React Routing</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><Link to="/">Home</Link></td>
                            <td><Link to="/about">About</Link></td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
            </div>
        );
    }
});

module.exports = Header;