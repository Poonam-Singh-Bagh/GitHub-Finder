import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      padding: theme.spacing(5),
    },
  },
}));

function Repos(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} align="right">
      <Paper align="left" elevation={8}>
        <Typography variant="h6" color="primary" className="name">
          {props.name}
        </Typography>
        <Typography color="textSecondary">{props.full_name}</Typography>
        <Typography color="textSecondary">{props.description}</Typography>
        <div style={{ display: "flex" }}>
          <Typography color="textSecondary" style={{ marginRight: "20px" }}>
            {props.language}
          </Typography>
          <Typography color="textSecondary" style={{ marginRight: "20px" }}>
            Forks : {props.forks_count}
          </Typography>
          <Typography color="textSecondary" style={{ marginRight: "20px" }}>
            Watchers : {props.watchers_count}
          </Typography>
          <Typography color="textSecondary" style={{ marginRight: "20px" }}>
            Stars : {props.stars_count}
          </Typography>
          <Typography color="textSecondary">
            updated on : {props.updated_at}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default Repos;
