import React, { Component } from 'react';

class Form extends Component{
    constructor(){
        super();
        this.initalState = {
            name : "",
            role : ""
        }
        this.state = this.initalState;
    }
    changerHandler = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = () =>{
        console.log("Name : " + this.refs.name.value);
        console.log("Role : " + this.refs.role.value);
        console.log(this.props);
        this.props.addingUser(this.state);
        // this.setState(this.initalState);
    }
    render(){
        return (
            <form>
                Name : 
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter name"
                    name = "name"
                    ref = "name"
                    value = {this.state.name}
                    onChange={this.changerHandler}/>
                Role :
                <input type="text" 
                    className="form-control" 
                    placeholder="Role"
                    name = "role"
                    ref = "role"
                    value={this.state.role}
                    onChange={this.changerHandler}/>
                <button type="button" 
                    className="btn btn-block btn-success"
                    onClick={this.handleSubmit}>
                    Add New User
                </button>
            </form>
        )
    }
}
export default Form;