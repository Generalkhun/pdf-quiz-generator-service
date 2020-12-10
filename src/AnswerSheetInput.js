import React, { useState } from "react";

const addAnswer = () => {
  console.log("Add answer")

}

export default function(){
  const [type, setType] = useState("SELECT");
  
  const [allAns, setAllAns] = useState({})
  return (
    <div>
      <p>{type}</p>
      <button
        onClick={() => {
            setType(prev => {
                let newState = "SELECT"
                if (prev === "SELECT") {newState = "FILL"}
                return newState
            })
        }}
      >
        Change answer type
      </button>
      <button onClick = {() => {addAnswer()}}>Add</button>
    </div>
  );
};


