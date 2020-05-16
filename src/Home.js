import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  console.log(history);
  const routeToForm = (event) => {
    history.push("/pizza");
  };

  return (
      <div >
        <button className="optionbutton" onClick={routeToForm}>
          Build Your Pizza
        </button>
      </div>
  );

    
}

export default Home;
