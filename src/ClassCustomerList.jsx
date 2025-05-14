
import React, {Component} from "react";
import CustomerCard from "./CustomerCard"

class classCustomerList extends Component {
    constructor(props) {
        super (props)
        this.state = {
            customers: [
                {id:1, name:"John Doe", email:"john@example.com"},
                {id:2, name:"Jane Smith", email:"jane@example.com"}
            ]
        }
    }
    render (){
        return (
            <div>
            <h2>Customer List (Class Component)</h2>
            {this.state.customers.map(customer => (
                <CustomerCard KEY={customer.id} customer={customer}/>
            ))}
            </div>
        )
    }
}
export default classCustomerList