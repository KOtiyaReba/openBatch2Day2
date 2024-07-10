import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const StateBasics = () => {
  var [name, setName] = useState("Tiya");
  var [input, setInput] = useState();

  const changeName = () => {
    console.log("btn clicked");
    setName(input);
  };

  const inputHandler = (p) => {
    console.log(p.target.value);
    setInput(p.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <Typography variant="h3">Hello {name} </Typography>
      <br />
      <br />
      <TextField
        variant="outlined"
        label="enter your name"
        onChange={inputHandler}
      />
      <br />
      <br />
      <Button variant="contained" onClick={changeName}>
        Change
      </Button>
    </div>
  );
};

export default StateBasics;
