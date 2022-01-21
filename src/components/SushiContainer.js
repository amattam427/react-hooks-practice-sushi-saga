import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushiList, handleEatSushi, eatenSushi}) {
  
  const[beltPosition, setBeltPosition] = useState(0)

  function sushiToRender(){
    //create new array based off sushi data - starting off with first 4
    const displayArray = sushiList.slice(beltPosition, beltPosition + 4)

    //return an array for 4 elements
    return displayArray
  }

  function handleMoreSushi(){
    setBeltPosition((prevPosition)=> prevPosition + 4)
  }


  return (
    <div className="belt">
      {sushiToRender().map((sushi)=>
        <Sushi
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          image={sushi.img_url}
          price={sushi.price}
          handleEatSushi={handleEatSushi}
          eatenSushi={eatenSushi}
        />
      )}
      <MoreButton moreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
