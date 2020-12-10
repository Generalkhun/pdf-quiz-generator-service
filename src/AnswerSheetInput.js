import React, { useEffect, useState } from "react";

const addAnswer = () => {
  console.log("Add answer");
};

export default function () {
  const [type, setType] = useState("SELECT");
  const [allAns, setAllAns] = useState(<div></div>);
  const [choiceNumInput, setChoiceNumInput] = useState(4);
  useEffect(() => {
    console.log("add question");
  }, allAns);
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
