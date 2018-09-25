import React, { Component } from 'react';
import Table from './table';
import Form from './form';

class App extends Component {
    state = {};
    constructor() {
        super();
        this.state = {
            users: [{
                name: "Sanjeev",
                role: "Admin"
            }, {
                name: "Preeta",
                role: "User"
            }]
        }
    // console.log(this.state.users);
    }

    addNewUser = (user)=>{
        this.setState({
            users : [...this.state.users, user]
        })
    }

    render() {

        const removeUser = (index)=> {
            console.log(this.state);
            const { users } = this.state;
            // this.state.users = [];
            this.setState({
                users: users.filter((user, i) => {
                    return index !== i;
                })
            })
        }
        // const users = [{
        //     name : "Sanjeev",
        //     role : "Admin"
        // },{
        //     name : "Preeta",
        //     role : "User"
        // }]
        const { users } = this.state;
        return (
            <div>
                <h2>Welcome to React!!</h2>
                <Table users={users} removeUser={removeUser} />
                <div className="container">
                    <Form addingUser = { this.addNewUser }/>
                </div>
            </div>
        )
    }
}
export default App;