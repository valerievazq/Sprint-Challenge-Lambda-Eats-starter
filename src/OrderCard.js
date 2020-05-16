import React from "react";

const OrderCard = props => {
  return (
    <div >
      {props.pizza.map(cust => (
        <div key={cust.id}>
          <h2>{cust.name}</h2>
          <p>{cust.toppings.value}</p>
          <p>{cust.sauce}</p>
          <p>{cust.size}</p>
          <p>{cust.instructions}</p>
          <p></p>
        </div>
      ))}
    </div>
  
  )};

export default OrderCard;