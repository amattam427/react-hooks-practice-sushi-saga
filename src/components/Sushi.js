import React from "react";

function Sushi({name, image, price, id, handleEatSushi, eatenSushi}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={()=>handleEatSushi(id)}>
        {!eatenSushi.includes(id) ? (<img src={image} alt={name} width="100%"/>) : null}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
