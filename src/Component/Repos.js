import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
      padding: theme.spacing(5),
    },
  },
}));

function Repos(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} align="right">
      <Paper align="left" elevation={8}>
        <Typography
          variant="h6"
          color="primary"
          className="name"
          // whiteSpace="normal"
        >
          {props.name}
        </Typography>
        <Typography color="textSecondary" className="content">
          {props.full_name}
        </Typography>
        <Typography color="textSecondary">{props.description}</Typography>
        <Box style={{ display: "flex" }}>
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
        </Box>
      </Paper>
    </div>
  );
}

export default Repos;
