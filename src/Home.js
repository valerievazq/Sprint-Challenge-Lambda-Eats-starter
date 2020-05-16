import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  console.log(history);
  const routeToForm = (event) => {
    history.push("/pizza");
  };

  return (
      <div className='orderOptions'>
        <button className="optionPizza" onClick={routeToForm}>
          Get Pizza!
        </button>

        <button className="optionTacos">
          Get Tacos!
        </button>

        
        <button className="optionPasta">
          Get Pasta!
        </button>
      </div>
  );

    
}

export default Home;
