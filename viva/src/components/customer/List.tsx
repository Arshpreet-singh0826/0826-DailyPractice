import * as React from 'react'
import axios from 'axios'
import { Link, RouteComponentProps } from 'react-router-dom'
import DeleteModal from '../ui/DeleteModal'
const webApi = require('../../api')

interface IState {
    customers: any[]
}

export default class ListOfCustomer extends React.Component<RouteComponentProps, IState> {
    
    componentDidMount() {
        this.getCustomers()
    }

    state: IState = {
        customers: []
    }

    getCustomers(): void {
        axios.get(`${webApi.baseApiUrl}customers`).then(response => {
            this.setState({
                customers: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    deleteCustomer(customerId: number): void {
        if (customerId) {
            axios.delete(`${webApi.baseApiUrl}customers/${customerId}`).then(response => {
                alert(response.data)
                this.getCustomers()
            }).catch(error => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <div>
                <h3 className="title is-3">Customers</h3>
                <Link to={'/customers/create'} className="button is-link">Create new</Link>
                < hr />
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((customer, i) =>
                            <tr key={i}>
                                <td>{customer.customerId}</td>
                                <td>{customer.firstname}</td>
                                <td>{customer.lastname}</td>
                                <td>
                                    <Link to={`/customers/edit/${customer.customerId}`} className="button is-warning">Edit</Link>
                                    &nbsp;
                                    <button className="button is-danger" onClick={() => this.deleteCustomer(customer.customerId)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}