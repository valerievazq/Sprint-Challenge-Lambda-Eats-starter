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
  toppings: yup.string().required()
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
      e.target.type === "checkbox" [e.target.value];
      
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
        ? e.target.checked
        : e.target.type === "radio"
        ? e.target.checked
        : e.target.value;

    setFormState({ ...formState, [e.target.name]: value });
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
        <div>
          <h1>Name: </h1>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              className="input"
            />
            {error.name.length > 0 ? <p>{error.name}</p> : null}
          </label>
        </div>

        <div>
          <h2>Choose Your Size</h2>
          <div>
            <label htmlFor="size">
              <select id="size" name="size" onChange={handleChange}>
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

        <div>
          <h2>Select Your Choice of Sauce</h2>
          <div>
            <label htmlFor="marinara">
              Marinara
              <input
                id="marinara"
                type="radio"
                name="sauce"
                value={formState.marinara}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="garlicAlfredo">
              Garlic Alfredo
              <input
                id="garlicAlfredo"
                type="radio"
                name="sauce"
                value={formState.garlicAlfredo}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="bolognese">
              Bolognese
              <input
                id="bolognese"
                type="radio"
                name="sauce"
                value={formState.bolognese}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="creamyWhite">
              Creamy White
              <input
                id="creamyWhite"
                type="radio"
                name="sauce"
                value={formState.creamyWhite}
                onChange={handleChange}
              />
            </label>
            {error.name.length > 0 ? <p>{error.size}</p> : null}
          </div>
        </div>

        <div>
          <h2>Please select at least one topping</h2>
          <div>
            <label htmlFor="pepperoni">
              Pepperoni
              <input
                id="pepperoni"
                type="checkbox"
                name="toppings"
                value={formState.pepperoni}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="cheese">
              Cheese
              <input
                id="cheese"
                type="checkbox"
                name="toppings"
                value={formState.cheese}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="jalapeños">
              Jalapeños
              <input
                id="jalapeños"
                type="checkbox"
                name="toppings"
                value={formState.jalapeños}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="bacon">
              Bacon
              <input
                id="bacon"
                type="checkbox"
                name="toppings"
                value={formState.bacon}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="pineapple">
              Pineapple
              <input
                id="pineapple"
                type="checkbox"
                name="toppings"
                value= {formState.pineapple}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="peppers">
              Peppers
              <input
                id="peppers"
                type="checkbox"
                name="toppings"
                value={formState.peppers}
                onChange={handleChange}
              />
            </label>
          </div>
</div>
          <div>
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
