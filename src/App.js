import React, {useState} from "react";
import "./index.css";
import "./App.css";
import Home from "./Home";
import Form from "./Form";
import { Route, Link } from "react-router-dom";
// import OrderCard from './OrderCard.js';

const App = () => {
  // const [pizza, setPizza] = useState([
  //   {
  //     name: "",
  //     size: "",
  //     sauce: "",
  //     toppings: "",
  //     instructions: "",
  //   },
  // ]);

  // const handleSubmit = (newOrder) => {
  //   setPizza([...pizza, newOrder]);
  // };

  return (
    <div className="App">
      <nav>
        <div className="nav">
          <Link to="/">
            <h4 className="navbuttons">Home</h4>
          </Link>
          <Link to="/pizza">
            <h4 className="navbuttons">Order Now!</h4>
          </Link>
        </div>
        <div className="storeName">
        <h1 className='lambdaEats' >Lambda Eats</h1></div>
      </nav>
      <div className="container">
        <div>
          {/* <OrderCard pizza = {pizza} /> */}
          <Route path="/pizza" component={Form}></Route>
          <Route path="/" component={Home} />
        </div>
      </div>
    </div>
  );
};
export default App;
