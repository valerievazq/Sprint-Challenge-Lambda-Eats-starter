import * as yup from "yup";
import axios from "axios";
import "./App.css";

import React, { useState, useEffect } from "react";

//YUP VALIDATION FORMSCHEMA
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Enter a longer name"),
  size: yup.string().required("Please select a size"),
  sauce: yup.string().required("You must choose a sauce"),
  toppings: yup
    .string()
    .min(1, "You must choose at least one topping"),
  instructions: yup.string(),
});

const Form = (props) => {
  //STATES FOR THE FORM VALUES
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    instructions: "",
  });

  //BUTTON DISABLING WHEN FORM FAILS TO PASS VALIDATION
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  //ERROR STATE
  const [error, setError] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    instructions: "",
  });

  //VALIDATION FN
  const validate = (e) => {
    let value =
      e.target.type === "checkbox"
        ? e.target.id
        : e.target.type === "radio"
        ? e.target.id
        : e.target.value;

    yup
      //THIS GOES TO THE SCHEMA WE PREVIOUSLY CREATED AND RETRIEVE THE INFORMATION FOR VALIDATION
      .reach(formSchema, e.target.name)
      .validate(value)
      //THIS CLEARS THE ERROR MESSAGE IF FORM PASSES VALIDATION
      .then((valid) => {
        setError({
          ...error,
          [e.target.name]: "",
        });
      })
      //IF VALIDATION FAILS THIS RETRIEVES THE ERROR WE CREATED IN OUR SCHEMA
      .catch((err) => {
        setError({
          ...error,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //ONCHANGE FN
  const handleChange = (e) => {
    e.persist(); //ALLOWS US TO RUN IT ASYNC
    validate(e);
    const value =
      e.target.type === "checkbox"
        ? e.target.id
        : e.target.type === "radio"
        ? e.target.id
        : e.target.value;

    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  //STATE FOR NEW USER POST SUBMISSION
  const [users, setUsers] = useState([]);

  //ON SUBMISSION FN
  const formSubmit = (e) => {
    e.preventDefault(); // PREVENTS FORM FROM CLEARING
    console.log("ORDER ACCEPTED & VALIDATED");

    //SENDS THE INFORMATION FROM THE POST TO SERVER
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setUsers([...users, res.data]);
      })
      // .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  //FORM
  return (
    <form onSubmit={formSubmit}>
      <div className="form">
        <h1>Fill out this form to place your order</h1>
        <div className="component">
          <h1>Name: </h1>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              className="name"
              placeholder="Your Name Here Please"
            />
            {error.name.length > 2 ? <p>{error.name}</p> : null}
            
          </label>
        </div>

        <div className="component">
          <h2>Choose Your Size</h2>
          <div>
            <label htmlFor="size">
              <select
                id="size"
                name="size"
                onChange={handleChange}
                className="selectSize"
              >
                <option value="">--Please choose a size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extralarge">Extra Large</option>
              </select>
              {error.name.length > 0 ? <p>{error.size}</p> : null}
            </label>
          </div>
        </div>

        <div className="component">
          <h2>Select Your Choice of Sauce</h2>
          <div className="choices">
            <label
              className="selection"
              onChange={handleChange}
              htmlFor="marinara"
            >
              Marinara
              <input
                id="marinara"
                type="radio"
                name="sauce"
                value={formState.sauce}
              />
            </label>
            <label className="selection" htmlFor="garlicAlfredo">
              Garlic Alfredo
              <input
                id="garlicAlfredo"
                type="radio"
                name="sauce"
                value={formState.sauce}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="choices">
            <label className="selection" htmlFor="bbq">
              BBQ
              <input
                id="bbq"
                type="radio"
                name="sauce"
                value={formState.sauce}
                onChange={handleChange}
              />
            </label>
            <label className="selection" htmlFor="creamyWhite">
              Creamy White
              <input
                id="sauce"
                type="radio"
                name="sauce"
                value={formState.sauce}
                onChange={handleChange}
              />
            </label>
            {/* {error.name.length > 0 ? <p>{error.size}</p> : null} */}
          </div>
        </div>

        <div className="component">
          <h2>Please select at least one topping</h2>
          <div className="choices">
            <label className="selection" htmlFor="pepperoni">
              Pepperoni
              <input
                id="pepperoni"
                type="checkbox"
                name="toppings"
                value='pepperoni'
                onChange={handleChange}
              />
            </label>

            <label className="selection" htmlFor="cheese">
              Cheese
              <input
                id="cheese"
                type="checkbox"
                name="toppings"
                value='cheese'
                onChange={handleChange}
              />
            </label>

            <label className="selection" htmlFor="jalapeños">
              Jalapeños
              <input
                id="jalapeños"
                type="checkbox"
                name="toppings"
                value='jalapeños'
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="choices">
            <label className="selection" htmlFor="bacon">
              Bacon
              <input
                id="bacon"
                type="checkbox"
                name="toppings"
                value='bacon'
                onChange={handleChange}
              />
            </label>

            <label className="selection" htmlFor="pineapple">
              Pineapple
              <input
                id="toppings"
                type="checkbox"
                name="toppings"
                value='pineapple'
                onChange={handleChange}
              />
            </label>

            <label className="selection" htmlFor="peppers">
              Peppers
              <input
                id="toppings"
                type="checkbox"
                name="toppings"
                value='peppers'
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="component">
          <h2>Additional Instructions</h2>
          <div>
            <label htmlFor="instructions">
              <textarea
                id="instructions"
                name="instructions"
                value={formState.instructions}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button className="button" disabled={buttonDisabled}>
          Submit
        </button>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </form>
  );
};
export default Form;
