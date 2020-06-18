import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  console.log(history);

  const toForm = () => {
    history.push("/pizza");
  };

  return (
      <div className='orderOptions'>
        <button className="optionPizza" onClick={toForm}>
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
