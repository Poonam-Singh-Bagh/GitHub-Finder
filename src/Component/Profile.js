import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Repos from './Repos'
import MyProfile from './MyProfile'
import Grid from '@material-ui/core/Grid';


function Profile(props) {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${props.location.userData.login}/repos`)
        .then(res => {
            setRepos(res.data)
            console.log(repos)
            console.log("props", res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <Grid container >
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={4}>
            <MyProfile align="left" avatar={props.location.userData.avatar_url}/>
            <Grid item xs={false} sm={1} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <>
                {
                    repos.map((detail, index) => (
                    <div key={index}>
                        <Repos name={detail.name}
                            full_name={detail.full_name}
                            description={detail.description}
                            language={detail.language}
                            forks_count={detail.forks_count}
                            watchers_count={detail.watchers_count}
                            stars_count={detail.stargazers_count}
                        />
                    </div>))
                }
            </>
            </Grid>
            </Grid>
        </div>
    )
}

export default Profile
