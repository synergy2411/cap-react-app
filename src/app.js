import React, { Component } from 'react';
import Table from './table';

class App extends Component{
    render(){
        const users = [{
            name : "Sanjeev",
            role : "Admin"
        },{
            name : "Preeta",
            role : "User"
        }]
        return (
            <div>
                <h2>Welcome to React!!</h2>
                <Table users = {users} />
            </div>
        )
    }
}
export default App;