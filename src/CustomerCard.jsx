import React from "react";

const CustomerCard = ({ customer, warna }) => {
    return (
        <div
            style={{
                backgroundColor: warna, // Use the passed "warna" prop to set background color
                padding: "10px",
                margin: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px"
            }}
        >
            <h3>{customer.name}</h3>
            <p>{customer.email}</p>
        </div>
    );
};

export default CustomerCard;
