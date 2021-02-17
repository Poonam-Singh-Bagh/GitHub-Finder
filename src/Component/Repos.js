import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import Buttons from './Buttons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      padding: theme.spacing(5)
    },
  },
  PaperColor: {
    backgroundColor: 'red'
  },
}));

function Repos(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} align="right" >
      <Paper align="left" elevation={8}>
        <Typography variant="h6" color="primary">{props.name}</Typography>
        <Typography color="textSecondary">{props.full_name}</Typography>
        <Typography color="textSecondary">{props.description}</Typography>
        <Typography color="textSecondary">{props.language}</Typography>
        <Typography color="textSecondary">Forks : {props.forks_count}</Typography>
        <Typography color="textSecondary">Watchers : {props.watchers_count}</Typography>
        <Typography color="textSecondary">Stars : {props.stars_count}</Typography>
        {/* <Buttons onClick={props.clickHandler} child="star" /> */}
      </Paper>
    </div>
  );
}

export default Repos