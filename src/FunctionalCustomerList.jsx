import React, { useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";

const FunctionalCustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers([
            { id: 1, name: "Alice", email: "Alice@example.com" },
            { id: 2, name: "Bob", email: "bob@example.com" },
            { id: 3, name: "Charlie", email: "charlie@example.com" },
            { id: 4, name: "David", email: "david@example.com" },
        ]);
    }, []);

    return (
        <div>
            <h2>Customer List (Functional Component)</h2>
            {customers.map((customer) => {
                const warna = customer.id % 2 === 0 ? "red" : "white"; 
                
                return (
                    <CustomerCard
                        key={customer.id}
                        customer={customer}
                        warna={warna} 
                    />
                );
            })}
        </div>
    );
};

export default FunctionalCustomerList;
