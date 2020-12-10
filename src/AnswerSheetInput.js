import React, { useEffect, useState } from "react";



export default function () {
  const [type, setType] = useState("SELECT");
  const [allAns, setAllAns] = useState(<div></div>);
  const [choiceNumInput, setChoiceNumInput] = useState(4);
  const [questionNum, setQuestionNum] =  useState(1)
  useEffect(() => {
    console.log("add question");
  }, allAns);


  const addAnswer = () => {
    console.log("Add answer");
    setQuestionNum(prev => parseInt(prev) + 1)
  };


  return (
    <div>
      <button
        onClick={() => {
          setType((prev) => {
            let newState = "SELECT";
            if (prev === "SELECT") {
              newState = "FILL";
            }
            return newState;
          });
        }}
      >
        Change answer type
      </button>
      <button
        onClick={() => {
          addAnswer();
        }}
      >
        Add
      </button>
      <div>
      <p>Displayed choice number:</p>
      <input type="number" name="questionNnumber" value = {questionNum} onChange = {(e) => {setQuestionNum(parseInt(e.target.value))}} />
        <p>Question type: {type}</p>
        {type === "SELECT" ? (
          <div>
            <button
              onClick={() => {
                setChoiceNumInput((prev) => prev + 1);
              }}
            >
              +
            </button>
            <p>Choices : {choiceNumInput}</p>

            <button
              onClick={() => {
                setChoiceNumInput((prev) => prev - 1);
              }}
            >
              -
            </button>
          </div>
        ) : (
          <div>
            <p>Answer</p>
            <input type="text" name="choiceAns" />
          </div>
        )}
      </div>
      <div>{allAns}</div>
    </div>
  );
}
