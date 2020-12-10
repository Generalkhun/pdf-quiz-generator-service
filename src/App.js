import logo from "./logo.svg";
import "./App.css";
import ExamplePDF from "./ExamplePDF";
import AnswerSheetInput from "./AnswerSheetInput";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";

function App() {
  const [examName, setExamName] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Input exam name"
          onChange={(e) => {
            setExamName(e.target.value);
          }}
        />
      </form>
      <Grid item xs={12}>
      <h3>Exam Name : {examName}</h3>
        <Grid container justify="left">
          
          <ExamplePDF />
          <AnswerSheetInput />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
