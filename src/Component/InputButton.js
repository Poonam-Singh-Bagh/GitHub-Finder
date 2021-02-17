import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  profil: {
    width: theme.spacing(20),
    height: theme.spacing(10),
  }
  },
}));

function InputButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root, props.btn}>
      <Button className={props.btn} variant="contained" color={props.color} disabled={props.disabled} onClick={props.clickHandler}>{props.child}</Button>
    </div>
  );
}

export default InputButton

