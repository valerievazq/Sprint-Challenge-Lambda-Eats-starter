import React, { useState } from "react";
import "./index.css";
import Home from "./Home";
import Form from "./Form";
import { Route, Link } from "react-router-dom";
// import OrderCard from './OrderCard.js';

const App = () => {
  const [pizza, setPizza] = useState([
    {
      name: "",
      size: "",
      sauce: "",
      toppings: "",
      instructions: "",
    },
  ]);

  const handleSubmit = (newOrder) => {
    setPizza([...pizza, newOrder]);
  };

  return (
    <div className="App">
      <nav>
        <div className="nav">
          <Link to="/">
            <h4 className="navbuttons">Home</h4>
          </Link>
          <Link to="/pizza">
            <h4 className="navbuttons">Build Your Pizza!</h4>
          </Link>
        </div>
        <h1 className="storeName">Lambda Eats</h1>
      </nav>

      {/* <OrderCard pizza = {pizza} /> */}
        <Route path="/pizza" component={Form}>
          
        </Route>

        <Route path="/" component={Home} />
      
    </div>
  );
};
export default App;
