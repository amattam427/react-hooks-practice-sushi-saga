import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

//const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushi] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(()=>{
    fetch('http://localhost:3001/sushis')
    .then((r)=>r.json())
    .then((sushiData)=>{
      setSushi(sushiData)
    })
  }, [])

  function handleEatSushi(sushiId){
    if(!eatenSushi.includes(sushiId) && wallet - sushiList.find((sushObj)=>sushObj.id === sushiId).price>=0) {
    setEatenSushi((prevArr)=>[...prevArr, sushiId])

    setWallet(prevWallet => prevWallet - sushiList.find((sushObj)=>sushObj.id === sushiId).price)
    
  } else {
      alert('cant eat what you already ate')
  }
}

  return (
    <div className="app">
      <SushiContainer eatenSushi={eatenSushi} sushiList={sushiList} handleEatSushi={handleEatSushi} />
      <Table wallet = {wallet} eatenSushi={eatenSushi}/>
    </div>
  );
}

export default App;
