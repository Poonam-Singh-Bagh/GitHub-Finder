import React, { useState, useEffect } from "react";
import axios from "axios";
import Repos from "./Repos";
import MyProfile from "./MyProfile";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";

function Profile(props) {
  const location = useLocation();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${location.state.data.login}/repos`)
      .then((res) => {
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={4}
        style={{
          paddingLeft: "100px",
          paddingTop: "100px",
          paddingRight: "80px",
        }}
      >
        <MyProfile align="left" data={location.state.data} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        style={{
          paddingTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <>
          {repos.map((detail, index) => (
            <Repos
              name={detail.name}
              full_name={detail.full_name}
              description={detail.description}
              language={detail.language}
              forks_count={detail.forks_count}
              watchers_count={detail.watchers_count}
              stars_count={detail.stargazers_count}
            />
          ))}
        </>
      </Grid>
    </Grid>
  );
}

export default Profile;
