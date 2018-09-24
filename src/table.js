import React, { Component } from 'react'; 

class Table extends Component{
    
    render(){
        console.log(this.props);
        const { users } = this.props;

        const TableHead = () =>{
            return (
                <thead>
                    <tr>
                        <td>Name  </td>
                        <td>Role  </td>
                    </tr>
                </thead>
            )
        }

        const TableBody = (props) => {
            console.log(props);
            const rows = props.users.map((user, index)=>{
                return (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                    </tr>
                )
            })
            return <tbody>{rows}</tbody>;
        }

        // const heading = <h1 className="heading" id="head">Header Info </h1>;
        // const head = React.createElement("h2", {id : "footer"}, "Footer Info")
        return (
            <div className="container">
            <table className = "table table-border table-responsive">
                <TableHead /> 
                <TableBody users = { users }/>
            </table>
            

            </div>
        )
    }
}

export default Table;