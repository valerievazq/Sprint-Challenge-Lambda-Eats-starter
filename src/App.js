import React, { useState } from "react";
import "./index.css";
import Home from "./Home";
import Form from "./Form";
import { Route, Link, Switch } from "react-router-dom";

const App = () => {
  const [pizza] = useState("");
  return (
    <div className="App">
      <nav>
        <h1 className='storeName'>Lambda Eats</h1>
        <div className='nav'>
          <Link to="/"><h4>Home</h4></Link>
          <Link to="/pizza"><h4 >Build Your Pizza!</h4></Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <Form pizza={pizza} />
        </Route>

        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
