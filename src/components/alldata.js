import React from "react";
import { DataContext } from '../App';
import { Table } from 'react-bootstrap';

function AllData(){
    const ctx = React.useContext(DataContext);

    /* hard code test data with ctx
    //var user1= JSON.stringify(ctx.users);
    //var email1= JSON.stringify(ctx.email);
    //var password1= JSON.stringify(ctx.password);
    //var balance1= JSON.stringify(ctx.balance);*/

    /*hard code test data
    const data = [
        {user: "peter", email: "peter@mit.edu", password: "secret", balance: "$100"},
        {user: "red", email: "red@mit.edu", password: "secret", balance: "$100"},
        {user: "blue", email: "blue@mit.edu", password: "secret", balance: "$100"}
    ]*/

    //test data using ctx
    const string = JSON.stringify;
    const data = [
        {user: string(ctx.users), email: string(ctx.email), password: string(ctx.password), balance: "$" + string(ctx.balance)},
        {user: "test1", email: "test1@mit.edu", password: "secret", balance: "$100"},
        {user: "test2", email: "test2@mit.edu", password: "secret", balance: "$100"}
    ]

    /* test data using push
    const string = JSON.stringify;
    const data = [
        {user: "peter", email: "peter@mit.edu", password: "secret", balance: "$100"}
    ]*/

    const renderData = (data, index) => {
        return(
            <tr key={index}>
                <td>{data.user}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.balance}</td>
            </tr>
        )
    }

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Account Balance</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderData)}
            </tbody>
        </Table>
    );
}

export default AllData;

