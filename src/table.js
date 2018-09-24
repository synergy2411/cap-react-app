import React, { Component } from 'react';

class Table extends Component {


    render() {
        const { users } = this.props;

        const handleClick = (index) => {
            // alert("Clicked");
            this.props.removeUser(index);
        }

        const TableHead = () => {
            return (
                <thead>
                    <tr>
                        <td>Name  </td>
                        <td>Role  </td>
                    </tr>
                </thead>
            )
        }
        // const removingUser = (index)=>{
        //     removeUser(index);
        // }
        const TableBody = (props) => {
            console.log(props);
            const rows = props.users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>
                            {/* <button className="btn btn-default"
                                onClick={function(){return this.handleClick(index)}}>
                                Delete
                            </button> */}
                            <button className="btn btn-default"
                                onClick={()=>handleClick(index) }>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            })
            return <tbody>{rows}</tbody>;
        }

        // const heading = <h1 className="heading" id="head">Header Info </h1>;
        // const head = React.createElement("h2", {id : "footer"}, "Footer Info")
        return (
            <div className="container">
                <table className="table table-border table-responsive">
                    <TableHead />
                    <TableBody users={users} />
                </table>
            </div>
        )
    }


}

export default Table;