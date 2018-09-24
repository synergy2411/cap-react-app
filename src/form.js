import React, { Component } from 'react';

class Form extends Component{
    render(){
        return (
            <form>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter name"/>
            </form>
        )
    }
}
export default Form;