import React from "react";
import "./App.css";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
