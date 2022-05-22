import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputButton from "./InputButton";
import ImageAvatar from "./ImageAvatar";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    profil: {
      width: theme.spacing(20),
      height: theme.spacing(10),
    },
    spacing: {
      marginLeft: theme.spacing(5),
      color: "white",
    },
  },
}));

function MyProfile(props) {
  const classes = useStyles();

  return (
    <div align={props.align}>
      <ImageAvatar avatar={props.data.avatar_url} />
      <Typography variant="h5" style={{ fontWeight: 700, marginLeft: "20px" }}>
        {props.data.name}
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ marginLeft: "20px" }}
      >
        {props.data.login}
      </Typography>
      <Button
        variant="contained"
        style={{ marginLeft: "20px", marginBottom: "10px", marginTop: "10px" }}
        fullWidth
      >
        Follow
      </Button>
      {/* <InputButton className={classes.root.profile} child="Follow" btn="btn" /> */}
      <Typography style={{ marginLeft: "20px" }}>{props.data.bio}</Typography>
      <Typography style={{ marginLeft: "20px", marginTop: "10px" }}>
        {props.data.followers} followers . {props.data.following} following
      </Typography>
      <Typography style={{ marginLeft: "20px", marginTop: "10px" }}>
        <BusinessIcon /> {props.data.company}
      </Typography>
      <Typography style={{ marginLeft: "20px", marginTop: "10px" }}>
        <LocationOnIcon /> {props.data.location}
      </Typography>
      <Typography style={{ marginLeft: "20px", marginTop: "10px" }}>
        <TwitterIcon /> @{props.data.twitter_username}
      </Typography>
    </div>
  );
}

export default MyProfile;
