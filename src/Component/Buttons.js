import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    profil: {
      width: theme.spacing(20),
      height: theme.spacing(10),
    },
  },
}));

function Buttons(props) {
  const classes = useStyles();
  const [star, setStar] = useState("Star");

  const clickHandler = () => {
    setStar("Unstar");
  };

  const clickAgain = () => {
    setStar("Star");
  };

  return (
    <div className={classes.root} align="right">
      <Button
        variant="contained"
        clickHandler={clickHandler}
        onClick={clickAgain}
      >
        {props.child}
      </Button>
    </div>
  );
}

export default Buttons;
