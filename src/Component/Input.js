import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: theme.spacing(50),
    },
  },
}));

function Input(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        label="Search Username"
        margin="normal"
        variant="outlined"
        InputProps={{ type: "search" }}
        onChange={props.isDisplay}
      />
    </div>
  );
}

export default Input;
