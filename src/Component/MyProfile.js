import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputButton from './InputButton'
import ImageAvatar from './ImageAvatar'
import { Link } from 'react-router-dom'
import Buttons from './Buttons';


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

function MyProfile(props) {
    const classes = useStyles();
    console.log(props, "props are coming")

    return (
        <div align={props.align}>
            <ImageAvatar avatar={props.avatar} />
            <InputButton className={classes.root.profile} child="View Profile" btn="btn"/>
        </div>
    )
}

export default MyProfile